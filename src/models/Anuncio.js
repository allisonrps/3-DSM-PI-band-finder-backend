import mongoose from 'mongoose'

const esquema = mongoose.Schema({
    // _id é automático no Mongoose
    titulo: { type: String, required: true},
    usuario_id: {
        type: mongoose.ObjectId,
        ref: 'Usuario', // Nome do Model referenciado
        required: true
    },
    data: { type: Date, required: true},
    descricao: { type: String, required: false},
    municipio: {type: String, required: true},
    uf: {type: String, required: true},
    preco: { type: Number, required: true},
    midia: { type: String, required: false},
})
/*Parâmetros de mongoose.model
    1° ~> Nome do model (inicial maiuscula)
    2° ~> o esquema definido acima
    3° ~> nome da collection no BD ( inicial maiuscula, plural)
*/
export default mongoose.model('Anuncio', esquema, 'anuncios')