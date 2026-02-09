import express from 'express';
import EventosControllers from '../controllers/eventosController.js';

const router = express.Router();

router
  .get('/eventos', EventosControllers.pegarEventos);

export default router;
