import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
`;

const LogoImg = styled.img`
    margin-right: 10px;
    display: flex;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} className="App-logo" alt="logo" />
            <p> <strong> Alura Books </strong></p>
        </LogoContainer>
    );
}

export default Logo;