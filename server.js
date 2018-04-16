'use strict';
 
const express = require("express");
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const authorData = require('./utils/authorData');

class Server {
  constructor(){
    this.app = express();
    this.http = http.createServer(this.app);
    this.host ='0.0.0.0';
    this.port =  process.env.PORT || 4000;
  }

  addMiddleware(){
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  addRoutes(){
    new authorData(this.app).authorDataConfig();
  }

  Main(){

        this.addMiddleware();
        this.addRoutes();
        this.http.listen(this.port, this.host);
    }
}

var server = new Server();
server.Main();