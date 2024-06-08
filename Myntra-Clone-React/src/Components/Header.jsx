// Importing icons from react-icons
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";

// Importing Link from react-router-dom
import { Link } from "react-router-dom";

// Importing useSelector from react-redux
import { useSelector } from "react-redux";

// Header component
const Header = () => {
  // Using useSelector for getting bag from redux store
  const bag = useSelector((store) => store.bag);
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">
          <IoSearchOutline />
        </span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <span className="material-symbols-outlined action_icon">
            <IoPersonOutline />
          </span>
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <span className="material-symbols-outlined action_icon">
            <CiHeart />
          </span>
          <span className="action_name">Wishlist</span>
        </div>

        <Link to="/bag" className="action_container">
          <span className="material-symbols-outlined action_icon">
            <LiaShoppingBagSolid />
          </span>
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

// exporting Footer component
export default Header;
