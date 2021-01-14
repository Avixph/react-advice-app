import logo from "../images/friendly_chatter_logo.png";
import "./css/Header.css";

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-logo">
        <img src={logo} alt="" />
      </h1>
    </header>
  );
}

export default Header;
