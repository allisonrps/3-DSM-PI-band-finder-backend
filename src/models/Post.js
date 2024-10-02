import mongoose from 'mongoose'

const esquema = mongoose.Schema({
    // _id é automático no Mongoose
    usuario_id: {
        type: mongoose.ObjectId,
        ref: 'Usuario', // Nome do Model referenciado
        required: true
    },
    data: { type: Date, required: true},
    descricao: { type: String, required: true},
    midia: { type: String, required: false},
})
/*Parâmetros de mongoose.model
    1° ~> Nome do model (inicial maiuscula)
    2° ~> o esquema definido acima
    3° ~> nome da collection no BD ( inicial maiuscula, plural)
*/
export default mongoose.model('Post',esquema, 'posts')