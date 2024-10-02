const mongoose = require('mongoose');

const conectarBancoDeDados = async () => {
    try {
        await mongoose.connect('mongodb+srv://allisonrps:Password123@cluster0.js5vzpa.mongodb.net/sunguard', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

module.exports = conectarBancoDeDados;
