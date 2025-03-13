import express, { Express } from 'express';
import connectDB from './config/dbConnect.js';
import routes from './routes/index.js';

const connect = await connectDB();
const app: Express = express();

connect.on("error", (erro)=>{
    console.error("erro de conexão", erro);
})
connect.once("open", () =>{
    console.log("conexão com o banco feita com sucesso")
})

routes(app)

export default app
