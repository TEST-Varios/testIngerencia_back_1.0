import Server from './classes/server'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import testRoutes from "./routes/test";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const server = new Server();

server.app.use(morgan('dev'));

server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json())

server.app.use( fileUpload({ useTempFiles: true }) );

server.app.use( cors({ origin: true, credentials: true }));

server.app.use('/api/test', testRoutes);


/* conectar bd */
connectMongo();

async function connectMongo(){
    const config = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    };
    try{
        await mongoose.connect("mongodb://localhost:27017/test",config);
        console.log('Base de datos conectada correctamente');
    }catch(e){
        setTimeout(()=>{
            console.log("Error en la conneccion con mongo - reintentando en 5 segundos");
            connectMongo();
        },5000);
    }
}
/* levanta espress */
server.start();