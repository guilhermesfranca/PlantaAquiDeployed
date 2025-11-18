import connectDB from '@/lib/mongodb';
import Donation from '@/models/Donation';

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === 'GET') {
      const donations = await Donation.find({ status: 'completed' });
      const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);
      const totalDonations = donations.length;

      return res.status(200).json({
        totalAmount,
        totalDonations,
        averageDonation: totalDonations > 0 ? totalAmount / totalDonations : 0,
      });
    }

    return res.status(405).json({ message: 'Método não permitido' });
  } catch (error) {
    console.error('Erro ao buscar estatísticas de doações:', error);
    return res.status(500).json({ 
      message: 'Erro ao buscar estatísticas', 
      error: error.message 
    });
  }
}