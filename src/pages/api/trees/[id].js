import connectDB from '../../../lib/mongodb';
import Tree from '../../../models/Tree';

export default async function handler(req, res) {
  try {
    await connectDB();
    const { id } = req.query;

    // DELETE /api/trees/[id]
    if (req.method === 'DELETE') {
      const tree = await Tree.findByIdAndDelete(id);
      
      if (!tree) {
        return res.status(404).json({ message: 'Árvore não encontrada' });
      }
      
      return res.status(200).json({ 
        message: 'Árvore removida com sucesso',
        tree 
      });
    }

    // GET /api/trees/[id]
    if (req.method === 'GET') {
      const tree = await Tree.findById(id);
      
      if (!tree) {
        return res.status(404).json({ message: 'Árvore não encontrada' });
      }
      
      return res.status(200).json(tree);
    }

    return res.status(405).json({ message: 'Método não permitido' });
  } catch (error) {
    console.error('Erro na API trees/[id]:', error);
    return res.status(500).json({ 
      message: 'Erro no servidor', 
      error: error.message 
    });
  }
}