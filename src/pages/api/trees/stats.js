import connectDB from '@/lib/mongodb';
import Tree from '@/models/Tree';

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === 'GET') {
      const trees = await Tree.find();
      const totalTrees = trees.length;
      const totalCO2 = trees.reduce((sum, tree) => sum + tree.impact.co2, 0);
      const totalOxygen = trees.reduce((sum, tree) => sum + tree.impact.oxygen, 0);

      return res.status(200).json({
        totalTrees,
        totalCO2,
        totalOxygen,
      });
    }

    return res.status(405).json({ message: 'Método não permitido' });
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    return res.status(500).json({ 
      message: 'Erro ao buscar estatísticas', 
      error: error.message 
    });
  }
}