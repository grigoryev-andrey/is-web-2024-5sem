import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="../assets/logo.svg" alt="Bella Pizza Logo" className="logo" />
                <span className="brand-name">Bella Pizza</span>
            </div>
            <nav className="nav-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Главная</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu" className="nav-link">Меню</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blog" className="nav-link">Блог</Link>
                    </li>
                </ul>
                <button className="cart-button">Корзина</button>
            </nav>
        </header>
    );
}

export default Header;
