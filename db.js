const mongoose = require('mongoose');



const uri = "mongodb+srv://allisonrps:Password123@cluster0.js5vzpa.mongodb.net/bandfinder"
mongoose.connect(uri, { NewUrlParser: true, useUnifiedTopology: true} )





const mongoose = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Sair do processo com falha
    }
};

module.exports = mongoose;
