import React from 'react';
import styles from './Appbar.module.css';

const Appbar = () => {
    return(
        <div className={styles.center}>
            <a href = "#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Home
            </a>
            <a href = "#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                About Us
            </a>
            <a href = "#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Projects
            </a>
        </div>
    )
}

export default Appbar;