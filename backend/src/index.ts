import express,{Application, Request,Response} from 'express'
import http from 'http'
import { Server } from 'socket.io'


const app:Application = express()
const server = http.createServer(app)

const io = new Server(server)