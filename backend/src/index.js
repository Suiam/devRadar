const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const routes = require('./routes');

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb+srv://suiam_semanaomnistack:omnistack@cluster0-nlc9p.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const { setupWebsocket } = require('./websocket');

setupWebsocket(server);

app.use(cors());
app.use(express.json()); //precisa vir antes das rotas
app.use(routes);

//Métodos HTTP: get,post,put,delete

//Tipos de parametro: 
//Query Params(req.query), 
//Route Params(req.params - utilizado no put ou delete), 
//Body(req.body - utilizado no post ou no put) 

app.listen(3333);

