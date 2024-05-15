import express from 'express';
import { criarUsuarioController, listarUsuariosController } from '../controllers/userController';

const router = express.Router();

router.post('/user', criarUsuarioController);
router.get('/user', listarUsuariosController);

export default router;
