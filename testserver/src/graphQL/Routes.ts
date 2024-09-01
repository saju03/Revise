import express, { Router } from "express";
import { ruruHTML } from "ruru/server";

const graphRouter: Router = express.Router();

// Render GraphiQL IDE when visiting /graphiql
graphRouter.get('/', (req, res) => {
    res.type('html');
    res.end(ruruHTML({ endpoint: '/graphql' }));
});

export default graphRouter;