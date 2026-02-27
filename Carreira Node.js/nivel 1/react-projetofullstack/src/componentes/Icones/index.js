import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from "styled-components";

const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`;

const Icone = styled.li`
    margin-left: 15px;
`;

function Icones() {
    const iconesOpcoes = [perfil, sacola]

    return (
        <IconesContainer>
            {iconesOpcoes.map((icone) => (
                <Icone key={icone}>
                    <img src={icone} alt="ícone" />
                </Icone>
            ))}
        </IconesContainer>
    );
}

export default Icones;