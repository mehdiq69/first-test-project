import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navBar}>
          <NavLink to="/">Home Page</NavLink>
          <NavLink to="/productsList">Products List</NavLink>
        </div>
        <p>
          <a href="https://google.com">Google.com</a>
        </p>
      </header>
      {children}
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};

export default Layout;
