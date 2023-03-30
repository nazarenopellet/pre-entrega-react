import "./navbar.css"
import logo from "../../assets/logo.png"


const navbar = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img className="header-logo" scr={logo.png}></img>
                <nav className="navbar">
                    <p className="nav-link">Inicio</p>
                    <p className="nav-link">Marcas de ropa</p>
                    <p className="nav-link">Acerca de</p>
                    <p className="nav-link">Comentarios</p>
                </nav>
            </div>
        </header>
    )
}

export default navbar