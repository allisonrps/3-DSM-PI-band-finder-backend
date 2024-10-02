import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import usuarioRouter from './routes/usuarios.js';
import sensorRouter from './routes/sensors.js';


// Inicialização do Express
const app = express();

// Conexão com o banco de dados MongoDB
mongoose.connect(process.env.DATABASE_URL);

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Rotas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/usuarios', usuarioRouter);
app.use('/sensores', sensorRouter);


app.get('/', (req, res) => {
  res.send('Sun Guard!');
});


// Inicialização do servidor
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});




export default app;
