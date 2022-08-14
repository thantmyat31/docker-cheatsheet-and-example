import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../../assets/img/logo.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <Link to="/">
            <img className={styles.logo} src={Logo} alt="Future Hub" />
        </Link>
        <nav>
            <Link to="/">Registration</Link>
            <Link to="/list">List</Link>
        </nav>
    </header>
  )
}
