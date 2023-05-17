// import  jsonSever  from 'json-server';
const jsonSever = require('json-server');
const server = jsonSever.create();
const router = jsonSever.router('./aluraflix.json');
const middlewares = jsonSever.defaults();

server.use(middlewares);


server.use(router);
server.listen(4000,()=>{
    console.log('JSON server is running');
})