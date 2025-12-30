import express from 'express';

const app = express();
// const PORT = process.env.PORT || 3000;
app.use(express.json());

const livros = [
    { id: 1, titulo: 'O Senhor dos Anéis' },
    { id: 2, titulo: '1984' },
    { id: 3, titulo: 'O Pequeno Príncipe' }
];

function buscarLivros(id) {
    return livros.find(livro => livro.id === Number(id));
}

app.get('/', (req, res) => {
    req._readableState; // Hack para evitar erro de variável não utilizada
    res.status(200).send('Curso de Node.js na Alura!');
});

app.get('/livros', (req, res) => {
    req._readableState; // Hack para evitar erro de variável não utilizada
    res.status(200).json(livros);
}); 

app.get('/livros/:id', (req, res) => {
    const livro = buscarLivros(req.params.id);
    res.status(200).json(livro);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro adicionado com sucesso!');
});

app.put('/livros/:id', (req, res) => {
    const index = buscarLivros(req.params.id);
    livros[index].titulo = req.titulo;
    res.status(200).send('Livro atualizado com sucesso!');
});


app.delete('/livros/:id', (req, res) => {
    const index = buscarLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro removido com sucesso!');
});

export default app;