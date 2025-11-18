import connectDB from '@/lib/mongodb';
import Donation from '@/models/Donation';

export default async function handler(req, res) {
  try {
    await connectDB();

    // GET /api/donations
    if (req.method === 'GET') {
      const donations = await Donation.find()
        .sort({ createdAt: -1 })
        .limit(20);
      return res.status(200).json(donations);
    }

    // POST /api/donations
    if (req.method === 'POST') {
      const donation = new Donation(req.body);
      await donation.save();
      return res.status(201).json(donation);
    }

    return res.status(405).json({ message: 'Método não permitido' });
  } catch (error) {
    console.error('Erro na API donations:', error);
    return res.status(400).json({ 
      message: 'Erro ao processar doação', 
      error: error.message 
    });
  }
}