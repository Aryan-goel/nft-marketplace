import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import ThemeSwitchIcon from '../assets/header/theme-switch.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} />
        </div>
        <input
          className="searchInput"
          placeholder="collection items or user ..."
        />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitcher">
          <img src={ThemeSwitchIcon} alt=""></img>
        </div>

      </div>
      <div className="LoginButton">
        Get in
      </div>
    </div>
  );
};

export default Header;
