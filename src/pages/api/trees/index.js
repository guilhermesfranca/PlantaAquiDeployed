import connectDB from '@/lib/mongodb';
import Tree from '@/models/Tree';

export default async function handler(req, res) {
  try {
    await connectDB();

    // GET /api/trees
    if (req.method === 'GET') {
      const trees = await Tree.find().sort({ createdAt: -1 });
      return res.status(200).json(trees);
    }

    // POST /api/trees
    if (req.method === 'POST') {
      // Calcular impacto automaticamente
      const impact = {
        co2: Math.floor(Math.random() * 20) + 10, // 10-30kg/ano
        oxygen: Math.floor(Math.random() * 100) + 50, // 50-150kg/ano
      };

      const tree = new Tree({
        ...req.body,
        impact,
      });

      await tree.save();
      return res.status(201).json(tree);
    }

    // Método não permitido
    return res.status(405).json({ message: 'Método não permitido' });
  } catch (error) {
    console.error('Erro na API trees:', error);
    return res.status(500).json({ 
      message: 'Erro no servidor', 
      error: error.message 
    });
  }
}