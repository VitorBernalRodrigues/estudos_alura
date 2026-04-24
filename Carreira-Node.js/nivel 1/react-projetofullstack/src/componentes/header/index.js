// import "./estilo.css";
import Logo from "../Logo";
import Icones from "../Icones";
import opcoesHeader from "../OpcoesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer >
            <Logo />
            {opcoesHeader()}
            <Icones />
        </HeaderContainer>
    );
}

export default Header;