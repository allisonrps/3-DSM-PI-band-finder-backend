import Venda from '../models/Venda.js'

const controller = {}   // Objeto vazio

controller.create = async function(req, res) {
  try {
    await Venda.create(req.body)

    // Envia uma resposta de sucesso ao front-end
    // HTTP 201: Created
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.retrieveAll = async function(req, res) {
  try {
    const query = Venda.find().sort({ descricao: 'asc'})
    // Verifica se o parametro 'pop_fornecedor' foi passado na URL
    //e, em caso positivo, acrescenta o populate() à consulta
   if('pop_usuario' in req.query) query.populate('usuario')
   const result = await query.exec()
    // HTTP 200: OK (implícito)
    res.send(result)
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.retrieveOne = async function(req, res) {
  try {
    const query = Venda.findById(req.params.id)
    
    // Verifica se o parametro 'pop_fornecedor' foi passado na URL
    //e, em caso positivo, acrescenta o populate() à consulta
   if('pop_usuario' in req.query) query.populate('usuario')
   
   const result = await query.exec()

    // Documento não encontrado ~> HTTP 200: OK (implicito)
    if(result) res.send(result)
    // Documento não encontrado ~> HTTP 404: Not Found
    else res.status(404).end()  
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.update = async function(req, res) {
  try {
    const result = await Venda.findByIdAndUpdate(req.params.id, req.body)
    // Documento encontrado e atualizado ~> HTTP 204: No Content
    if(result) res.status(204).end()
    // Documento não encontrado (e não atualizado) ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.delete = async function(req, res) {
  try {
    const result = await Venda.findByIdAndDelete(req.params.id)
    // Documento encontrado e excluído ~> HTTP 204: No Content
    if(result) res.status(204).end()
    // Documento não encontrado (e não excluído) ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

export default controller