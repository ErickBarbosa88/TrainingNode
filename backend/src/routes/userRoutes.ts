import express from 'express';
import { criarUsuarioController, listarUsuariosController, loginController } from '../controllers/userController';

const router = express.Router();

router.post('/user', criarUsuarioController);
router.get('/user', listarUsuariosController);
router.post('/user/login', loginController);

export default router;
