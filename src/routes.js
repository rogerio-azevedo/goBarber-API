import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Rogerio Azevedo',
    email: 'rogerio@rogerioazevedo.net',
    password_hash: '12345678',
  });

  return res.json(user);
});

export default routes;
