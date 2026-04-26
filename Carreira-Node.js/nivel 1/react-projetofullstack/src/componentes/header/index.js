// import "./estilo.css";
import Logo from "../Logo";
import Icones from "../Icones";
import opcoesHeader from "../OpcoesHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer >
            <Link to={"/"}><Logo /></Link>
            <Logo />
            {opcoesHeader()}
            <Icones />
        </HeaderContainer>
    );
}

export default Header;