import { Link } from "react-router-dom";
import logoIcon from "../assets/img/logo.png";
import cartIcon from "../assets/img/cart.png";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useEffect, useState } from "react";

export const Header = ({ cartCount }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("Auth token");
    sessionStorage.removeItem("User Id");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  useEffect(() => {
    const checkAuthToken = () => {
      const token = sessionStorage.getItem("Auth token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    window.addEventListener("storage", checkAuthToken);

    return () => {
      window.removeEventListener("storage", checkAuthToken);
    };
  }, []);

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
          <Link to="/cart" className="mr-4 relative">
            <img src={cartIcon} alt="Карта" />
            {cartCount > 0 ? (
              <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-3 -right-4">
                {cartCount}
              </div>
            ) : null}
          </Link>
          {isLoggedIn ? (
            <Button onClick={handleLogout}>Log Out</Button>
          ) : (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
