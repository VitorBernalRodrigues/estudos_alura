// import http from 'http';
import app from './src/app.js';
// import { routes } from './routes.js';

const PORT = 3000;



// const server = http.createServer((req, res) => {
//     // const { method, url } = req;
//     res.writeHead(200, { 'Content-Type': 'text/plain' }); 
//     res.end(rotas[req.url]);
// })

app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
});