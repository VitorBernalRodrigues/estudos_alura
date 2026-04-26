import Header from "../componentes/header";
import Pesquesa from "../componentes/Pesquisa";
import styled from "styled-components";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 100%);
`;

function Home() {
    return (
        <AppContainer>
            <Pesquesa />
        </AppContainer>
    );
}

export default Home;
