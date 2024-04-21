import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          className="logo"
        />
      </div>
      <div className="menu-container">
        <ul className="menu-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;