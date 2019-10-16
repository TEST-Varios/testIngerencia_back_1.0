//import express from 'express';
import express from "express";

export default class Server {

    public app : express.Application;
    public port: number = 3600;

    constructor() {
        this.app = express();
    }

    start( ) {
        this.app.listen(  this.port );
        console.log('servidor corriendo en puerto: ' + this.port) 
    }

}