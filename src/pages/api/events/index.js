import connectDB from '../../../../lib/mongodb';
import Event from '../../../../models/Event';

export default async function handler(req, res) {
  try {
    await connectDB();

    // GET /api/events
    if (req.method === 'GET') {
      const events = await Event.find().sort({ createdAt: -1 });
      return res.status(200).json(events);
    }

    // POST /api/events
    if (req.method === 'POST') {
      const { title, description, location, date, imageUrl, icon, liked } = req.body;

      if (!title || !description || !location || !date) {
        return res.status(400).json({ 
          message: 'Campos obrigatórios em falta.' 
        });
      }

      const newEvent = new Event({ 
        title, 
        description, 
        location, 
        date, 
        imageUrl, 
        icon, 
        liked 
      });
      
      const saved = await newEvent.save();

      return res.status(201).json({
        message: 'Evento criado com sucesso!',
        event: saved,
      });
    }

    return res.status(405).json({ message: 'Método não permitido' });
  } catch (error) {
    console.error('Erro na API events:', error);
    return res.status(500).json({ 
      message: 'Erro ao processar evento', 
      error: error.message 
    });
  }
}