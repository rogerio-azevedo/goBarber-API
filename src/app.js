import expres from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = expres();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(expres.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
