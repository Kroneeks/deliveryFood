import { Link } from "react-router-dom";
import logoIcon from "../assets/img/logo.png";
import cartIcon from "../assets/img/cart.png";

export const Header = () => {
  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to="/"
            className="toggleColor flex items-center no-underline font-bold text-white hover:no-underline text-2xl lg:text-4xl"
          >
            <img
              src={logoIcon}
              alt="Logo"
              className="object-cover"
              width="60px"
            />
            <span className="inline-block align-baseline ml-3">Pizza</span>
          </Link>
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">
            Главная
          </Link>
          <Link to="#about" className="text-xl">
            О нас
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart">
            <img src={cartIcon} alt="Карта" />
          </Link>
          <Link to="/login">Войти</Link>
          <Link to="/register">Регистрация</Link>
        </div>
      </div>
    </nav>
  );
};
