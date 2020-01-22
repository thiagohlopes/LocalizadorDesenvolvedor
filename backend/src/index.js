// Metodos http GET, POST, PUT, DELETE
//Tipos de parametros:
//Query Params: request.query(filtro, ordenação, paginação,...)
//Rout Params: request.parms(identificar um recurso na alteração ou remoção)
//Body: request.body( Dados para criação ou alteração de um registro)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://thiago:awdrthnjil@cluster0-6txwd.gcp.mongodb.net/NomeBanco?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('conecção correta')
}).catch(error=>{
    console.log(error)
})
app.use(cors())
app.use(express.json()); //entender requisições no formato json
app.use(routes);

app.listen(3333);