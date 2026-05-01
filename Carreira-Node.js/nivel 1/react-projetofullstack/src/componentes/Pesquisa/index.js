import Input from '../input';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getLivros } from '../../servicos/livros';
import { postFavorito } from '../../servicos/favorito';
//  

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`;

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`;

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`;

function Pesquisa() {
    const [livrosDigitados, setLivrosDigitados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const fetchLivros = async () => {
            const livrosDaAPI = await getLivros();
            setLivros(livrosDaAPI);
        };

        fetchLivros();
    }, []);

    async function insertFavoritos() {
        await postFavorito(id)
        alert('Livro adicionado aos favoritos!')
    }

    console.log(livrosDigitados);

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter(livro => 
                        livro.nome.includes(textoDigitado)
                    );
                    setLivrosDigitados(resultadoPesquisa);
                }}
            />  
            {livrosDigitados.map(livro => (
                <ResultadoPesquisa onClick={() => insertFavoritos(livro.id)}> 
                    <img src={livro.src} />,
                    <p>{livro.nome}</p>
                </ResultadoPesquisa>
            ))}
        </PesquisaContainer>
    );
}
    
export default Pesquisa;
