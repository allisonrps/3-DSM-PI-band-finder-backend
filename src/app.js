import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import usuarioRouter from './routes/usuarios.js';
import projetoRouter from './routes/projetos.js';
import postRouter from './routes/posts.js';
import anuncioRouter from './routes/vendas.js';
import authRouter from './routes/auth.js';

// Inicialização do Express
const app = express();

// Conexão com o banco de dados MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Rotas
app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/usuarios', usuarioRouter);
app.use('/projetos', projetoRouter);
app.use('/posts', postRouter);
app.use('/anuncios', anuncioRouter);

// Inicialização do servidor
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});




export default app;
