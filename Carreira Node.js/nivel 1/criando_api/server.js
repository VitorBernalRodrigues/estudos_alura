import http from 'http';
// import { routes } from './routes.js';

const PORT = 3000;

const rotas = {
    '/': 'Curso de Node.js na Alura!',
    '/livros': 'Você está na página de livros',
    '/autores': 'Você está na página de autores',
    // '/editoras': 'Você está na página de editoras'
};

const server = http.createServer((req, res) => {
    // const { method, url } = req;
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 
    res.end(rotas[req.url]);
})

server.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
});