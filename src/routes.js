import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/users/index', UserController.index);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.put('/users/update', UserController.update);
routes.post('/sessions', SessionController.store);

export default routes;
