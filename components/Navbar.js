import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <div className={styles.header}>
                <Link href="/" target="_blank">
                    <img className={styles.header__logo} src="/youtube.png" alt="" />
                </Link>
                <div className={styles.header__nav}>
                    {' '}
                    <div className={styles.header__option}>
                        <Link href="/donate">
                            <span className={styles.header__optionLineOne}>Donate</span>
                        </Link>
                        <span className={styles.header__optionLineTwo}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
