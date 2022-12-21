import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const hambuger = click ? (
    <FontAwesomeIcon icon={faTimes} />
  ) : (
    <FontAwesomeIcon icon={faBars} />
  );

  const toggleMenu = click
    ? `${classes.navMenu} ${classes.active}`
    : classes.navMenu;

  const closeMenu = click ? classes.active : "";

  return (
    <div className={classes.header}>
      <nav className={classes.nav}>
        <div>
          <img alt="Logo" src={logo} />
        </div>
        <div className={classes.hambuger} onClick={handleClick}>
          {hambuger}
        </div>
        <div>
          <ul className={toggleMenu}>
            <li className={classes.navItem}>
              <Link to="/" onClick={handleClick} className={closeMenu}>
                Home
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/" onClick={handleClick} className={closeMenu}>
                Description
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/" onClick={handleClick} className={closeMenu}>
                About
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/" onClick={handleClick} className={closeMenu}>
                Partner
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={handleClick} className={closeMenu}>
                <button type="button">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={handleClick} className={closeMenu}>
                <button type="button">Register</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
