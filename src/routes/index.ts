import express, { Request, Response, Express } from 'express';
import cidadao from './cidadaoRoutes.js';

interface App {
    route: (path: string) => { get: (handler: (req: Request, res: Response) => Response) => void };
    use: (...handlers: any[]) => void;
}

const routes = (app: Express): void => {
    app.route('/').get((req, res) => {
        res.status(200).send('curso de node.js')
    });

    app.use(express.json(), cidadao);
};

export default routes;