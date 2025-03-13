import express from 'express';
import cidadao from './cidadaoRoutes.js';
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('curso de node.js');
    });
    app.use(express.json(), cidadao);
};
export default routes;
