import mongoose from 'mongoose'

const esquema = mongoose.Schema({
    data: { type: Date, required: true},
    uv: { type: String, required: true},
    umidade: { type: String, required: false},
    temperatura: {type: String, required: true}
});

export default mongoose.model('Sensor',esquema, 'sensores')