import styled from "styled-components";
import { Link } from "react-router-dom";

const OpcoesContainer = styled.ul`
    display: flex;
    justify-content: center; 
`;

const Opcao = styled.li`
    cursor: pointer;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0px 5px;
    min-width: 120px;
`;

function opcoesHeader() {
    const textoOpcoes = ["Categorias", "Estante", "Favoritos"];

    return (
        <OpcoesContainer>
            {textoOpcoes.map((texto) => (
               <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link> 
            ))}
        </OpcoesContainer>
    );
}

export default opcoesHeader;