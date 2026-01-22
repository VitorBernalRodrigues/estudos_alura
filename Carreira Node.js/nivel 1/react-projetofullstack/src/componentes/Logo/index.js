import logo from "../../imagens/logo.svg";
import "./estilo.css";

function Logo() {
    return (
        <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <p> <strong> Alura Books </strong></p>
        </div>
    );
}

export default Logo;