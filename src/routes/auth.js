import express from 'express';
import Usuario from '../models/Usuario.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    const isMatch = await usuario.comparePassword(senha);
    if (!isMatch) {
      return res.status(400).json({ message: 'Senha incorreta' });
    }

    // Aqui você pode gerar um token JWT se quiser
    // const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login bem-sucedido', user: usuario /*, token*/ });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
});

export default router;
