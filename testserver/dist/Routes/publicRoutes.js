import express from "express";
import { userLogin } from "../Controllers/appControllers.js";
const publicRoute = express.Router();
publicRoute.get('/', (req, res) => {
    res.send('hello');
});
publicRoute.post('/login', userLogin);
export { publicRoute as Route };
