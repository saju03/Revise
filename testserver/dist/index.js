import express from 'express';
import morgan from 'morgan';
import { schema } from './graphQL/schema.js';
import { createHandler } from 'graphql-http/lib/use/express';
import { resolvers } from './graphQL/resolvers.js';
import { Route } from './Routes/publicRoutes.js';
import initDB from './Database/databaseConfig.js';
import graphRouter from './graphQL/Routes.js';
import { auth } from './Middleware/authWare.js';
import cookieParser from 'cookie-parser';
initDB();
const app = express();
// Public routes and middlewares
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(auth);
app.use('/', Route);
// GraphQL API Handler
app.all('/graphql', createHandler({ schema, rootValue: resolvers }));
// Serve GraphiQL on a different route, e.g., /graphiql
app.use('/graphiql', graphRouter);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// todo : create a authentication middleware
// todo : setup paymentgateway video chat , db indexing etc
