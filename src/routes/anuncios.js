import { Router } from 'express';
import controller from '../controllers/anuncio.js';


const router = Router(); // Crie uma instância do roteador do Express


router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

export default router