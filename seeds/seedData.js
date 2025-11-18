require('dotenv').config();
const connectDB = require('../lib/mongodb');
const Tree = require('../models/Tree');
const Donation = require('../models/Donation');

const trees = [
  {
    species: 'Ipê Amarelo',
    location: 'São Paulo, SP',
    description: 'Linda árvore nativa plantada no dia das crianças!',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc',
    planterName: 'Maria Silva',
    status: 'plantada',
    impact: { co2: 15, oxygen: 75 },
  },
  {
    species: 'Jacarandá',
    location: 'Rio de Janeiro, RJ',
    description: 'Plantio em homenagem à minha avó 💜',
    imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8',
    planterName: 'João Pedro',
    status: 'crescendo',
    impact: { co2: 22, oxygen: 95 },
  },
  {
    species: 'Pau-Brasil',
    location: 'Salvador, BA',
    description: 'Árvore símbolo do nosso país! 🇧🇷',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    planterName: 'Ana Costa',
    status: 'plantada',
    impact: { co2: 18, oxygen: 80 },
  },
  {
    species: 'Araucária',
    location: 'Curitiba, PR',
    description: 'Plantio em área de reflorestamento',
    imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d',
    planterName: 'Carlos Mendes',
    status: 'adulta',
    impact: { co2: 28, oxygen: 120 },
  },
  {
    species: 'Jatobá',
    location: 'Brasília, DF',
    description: 'Árvore forte e resistente para o cerrado',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc',
    planterName: 'Lucia Santos',
    status: 'crescendo',
    impact: { co2: 20, oxygen: 88 },
  },
  {
    species: 'Cedro',
    location: 'Manaus, AM',
    description: 'Contribuindo para a Amazônia 🌳',
    imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8',
    planterName: 'Roberto Lima',
    status: 'plantada',
    impact: { co2: 25, oxygen: 110 },
  },
  {
    species: 'Mogno',
    location: 'Belém, PA',
    description: 'Plantio comunitário na Amazônia',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    planterName: 'Sandra Oliveira',
    status: 'crescendo',
    impact: { co2: 19, oxygen: 85 },
  },
  {
    species: 'Ipê Roxo',
    location: 'Belo Horizonte, MG',
    description: 'Embelezando a cidade',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc',
    planterName: 'Paulo Ferreira',
    status: 'plantada',
    impact: { co2: 16, oxygen: 78 },
  },
];

const donations = [
  {
    donorName: 'Pedro Oliveira',
    amount: 50,
    ongName: 'SOS Mata Atlântica',
    message: 'Cada árvore faz diferença! 🌱',
    email: 'pedro@email.com',
    status: 'completed',
  },
  {
    donorName: 'Fernanda Costa',
    amount: 100,
    ongName: 'Instituto Árvores Vivas',
    message: 'Pelo futuro das próximas gerações',
    email: 'fernanda@email.com',
    status: 'completed',
  },
  {
    donorName: 'Ricardo Santos',
    amount: 25,
    ongName: 'Refloresta Brasil',
    message: '',
    email: 'ricardo@email.com',
    status: 'completed',
  },
  {
    donorName: 'Julia Mendes',
    amount: 75,
    ongName: 'SOS Mata Atlântica',
    message: 'Vamos juntos reflorestar! 💚',
    email: 'julia@email.com',
    status: 'completed',
  },
  {
    donorName: 'Marcos Lima',
    amount: 150,
    ongName: 'Amazônia Para Sempre',
    message: 'Pela Amazônia e pelo planeta',
    email: 'marcos@email.com',
    status: 'completed',
  },
  {
    donorName: 'Camila Rocha',
    amount: 200,
    ongName: 'Instituto Árvores Vivas',
    message: 'Investindo no futuro verde 🌿',
    email: 'camila@email.com',
    status: 'completed',
  },
];

async function seedDatabase() {
  try {
    await connectDB();
    console.log('✅ Conectado ao MongoDB');

    // Limpar dados existentes
    await Tree.deleteMany({});
    await Donation.deleteMany({});
    console.log('🗑️  Dados antigos removidos');

    // Inserir novos dados
    await Tree.insertMany(trees);
    await Donation.insertMany(donations);
    
    console.log('✅ Seeds inseridos com sucesso!');
    console.log(`🌳 ${trees.length} árvores`);
    console.log(`💰 ${donations.length} doações`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao inserir seeds:', error);
    process.exit(1);
  }
}

seedDatabase();