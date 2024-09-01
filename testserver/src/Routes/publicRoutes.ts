import express, { Router } from "express"
import { userLogin } from "../Controllers/appControllers.js"

const publicRoute:Router = express.Router()

publicRoute.get('/',(req,res)=>{
    res.send('hello')
})

publicRoute.post('/login',userLogin)



export {publicRoute as Route}