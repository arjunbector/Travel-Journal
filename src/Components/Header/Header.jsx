import React from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <BsGlobeCentralSouthAsia /> <span>my travel journal</span>
    </div>
  );
};

export default Header;
