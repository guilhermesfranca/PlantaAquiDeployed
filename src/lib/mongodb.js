const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('⚠️ Por favor, define a variável MONGODB_URI no ficheiro .env');
}

// Use global cache to avoid multiple connections during hot reloads (Next.js behavior)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000, // timeout de conexão
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ Conectado ao MongoDB Atlas com sucesso!');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('❌ Erro ao conectar ao MongoDB Atlas:', e);
    throw e;
  }

  return cached.conn;
}

module.exports = connectDB;