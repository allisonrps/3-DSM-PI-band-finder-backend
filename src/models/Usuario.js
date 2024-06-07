import mongoose from 'mongoose';

const esquema = mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true },
  data_nascimento: { type: Date, required: true },
  municipio: { type: String, required: true },
  uf: { type: String, required: true },
  foto_user: { type: String },
  bio: { type: String, required: true },
  influencias: { type: [String], required: true },
  habilidades: { type: [String], required: true },
  telefone: { type: String, required: true },
  instagram: { type: String },
  facebook: { type: String },
  youtube: { type: String },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
});

export default mongoose.model('Usuario', esquema, 'usuarios');

