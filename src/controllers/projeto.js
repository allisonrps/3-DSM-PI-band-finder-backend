import Projeto from '../models/Projeto.js';

const controller = {}

app.get('/projetos', async (req, res) => {
  try {
    const projetos = await Projeto.find();
    res.json(projetos);
  } catch (error) {
    res.status(500).send(error);
  }
});


controller.create = async function(req, res) {
  try {
    await Projeto.create(req.body);
    res.status(201).end();
  }
  catch(error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.retrieveAll = async function(req, res) {
  try {
    const query = Projeto.find().sort({ descricao: 'asc' });
    if ('pop_usuario' in req.query) query.populate('usuario');
    const result = await query.exec();
    res.send(result);
  }
  catch(error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.retrieveOne = async function(req, res) {
  try {
    const query = Projeto.findById(req.params.id);
    if ('pop_usuario' in req.query) query.populate('usuario');
    const result = await query.exec();
    if (result) res.send(result);
    else res.status(404).end();
  }
  catch(error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.update = async function(req, res) {
  try {
    const result = await Projeto.findByIdAndUpdate(req.params.id, req.body);
    if (result) res.status(204).end();
    else res.status(404).end();
  }
  catch(error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.delete = async function(req, res) {
  try {
    const result = await Projeto.findByIdAndDelete(req.params.id);
    if (result) res.status(204).end();
    else res.status(404).end();
  }
  catch(error) {
    console.error(error);
    res.status(500).end();
  }
};

export default controller;
