import { Router } from 'express'
import controller from '../controllers/usuario.js'

const router = Router()

router.post('/', controller.create)
/*var usuario = new usuario({
  nome: req.body.nome,
  cpf: req.body.cpf,
  data_nascimento: req.body.data_nascimento,
  municipio: req.body.municipio,
  uf: req.body.uf,
  foto_user: req.body.foto_user,
  bio: req.body.bio,
  influencias: req.body.influencias,
  habilidades: req.body.habilidades,
  telefone: req.body.telefone,
  instagram: req.body.instagram,
  facebook: req.body.facebook,
  youtube: req.body.youtube,
  email: req.body.email,
  senha:req.body.senha
})

usuario.save(function(err){
    if(err){
    console.log(err)
    }else{
    res.redirect('/login')
    }})
*/
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

export default router

