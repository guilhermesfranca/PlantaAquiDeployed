import connectDB from '../../../lib/mongodb';
import Event from '../../../models/Event';

export default async function handler(req, res) {
  try {
    await connectDB();
    const { id } = req.query;

    // DELETE /api/events/[id]
    if (req.method === 'DELETE') {
      const deleted = await Event.findByIdAndDelete(id);
      
      if (!deleted) {
        return res.status(404).json({ message: 'Evento não encontrado.' });
      }
      
      return res.status(200).json({ 
        message: 'Evento eliminado com sucesso!',
        event: deleted
      });
    }

    // GET /api/events/[id]
    if (req.method === 'GET') {
      const event = await Event.findById(id);
      
      if (!event) {
        return res.status(404).json({ message: 'Evento não encontrado.' });
      }
      
      return res.status(200).json(event);
    }

    return res.status(405).json({ message: 'Método não permitido' });
  } catch (error) {
    console.error('Erro na API events/[id]:', error);
    return res.status(500).json({ 
      message: 'Erro no servidor', 
      error: error.message 
    });
  }
}