/*import mongoose from 'mongoose';

const esquema = mongoose.Schema({
    // _id é automático no Mongoose
    titulo: { type: String, required: true },
    usuario_id: {
        type: mongoose.ObjectId,
        ref: 'Usuario', // Nome do Model referenciado
        required: true
    },
    descricao: { type: String, required: true },
    data: { type: Date, required: true },
    objetivo: { type: [String], required: true }, // Array
    municipio: { type: String, required: true },
    uf: { type: String, required: true },
    estilo: { type: [String], required: true }, // Array
    procura: { type: [String], required: true }, // Array
    link: { type: String, required: false }
});

export default mongoose.model('Projeto', esquema, 'projetos');
*/

import mongoose from 'mongoose';

const esquema = mongoose.Schema({
  titulo: { type: String, required: true },
  usuario_id: { type: mongoose.ObjectId, ref: 'Usuario', required: true },
  descricao: { type: String, required: true },
  data: { type: Date, required: true },
  objetivo: { type: [String], required: true },
  municipio: { type: String, required: true },
  uf: { type: String, required: true },
  estilo: { type: [String], required: true },
  procura: { type: [String], required: true },
  link: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.model('Projeto', esquema, 'projeto');
