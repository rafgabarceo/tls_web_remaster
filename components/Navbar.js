import Link from "next/link";
import styles from '../styles/Home.module.scss';
import Image from "next/image";
import { useState } from "react";

export default function Navbar(props) {
    return (
        <div className={`${styles.navbar} sticky`}>
            <Link href="/" className={styles.nav_logo_link}><img className={`${styles.nav_logo} nav_logo`} alt="TLS logo"/></Link>
            {props.isSearchClicked ? 
                <ul>
                    <input type="text" /> 
                </ul>
                :
                <ul>
                    <Link href="/section/university"><li>University</li></Link>
                    <Link href="/section/menagerie"><li>Menagerie</li></Link>
                    <Link href="/section/sports"><li>Sports</li></Link>
                    <Link href="/section/vanguard"><li>Vanguard</li></Link>
                    <Link href="/section/opinion"><li>Opinion</li></Link>
                    <Link href="/about"><li>About Us</li></Link>
                </ul>
            }
            <div className={styles.searchDiv}><img className={styles.search} onClick={props.handleOnClickSearch} src="./search.svg" alt="" /></div>
        </div>
    );

}