import express from "express";
import { ruruHTML } from "ruru/server";
const graphRouter = express.Router();
// Render GraphiQL IDE when visiting /graphiql
graphRouter.get('/', (req, res) => {
    res.type('html');
    res.end(ruruHTML({ endpoint: '/graphql' }));
});
export default graphRouter;
