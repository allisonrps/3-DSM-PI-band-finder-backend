import mongoose from 'mongoose';

const esquema = mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  data_nascimento: { type: Date, required: true },
  pele: { type: String, required: true },
  senha: { type: String, required: true }
});

export default mongoose.model('Usuario', esquema, 'usuarios');

