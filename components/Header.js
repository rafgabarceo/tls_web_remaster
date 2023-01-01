import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from '../styles/Home.module.scss';

export default function Header() {
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleOnClickSearch = () => {
        setIsSearchClicked(prevState => !prevState);
    };

    const handleOnClickMenu = () => {
        setIsMenuClicked(prevState => !prevState);
    };

    return (
        <>
            <div className={styles.logo}>
                <div class={styles.menuDiv}><img class={styles.menuImg} onClick={handleOnClickMenu} src="./menu.svg" alt="" /></div>
                {isSearchClicked ? 
                    <input type="text" /> 
                :
                    <div class={styles.logoDiv}><Link href="/"><img className={styles.logo_img} alt="TLS logo"/></Link></div>
                }
                <div className={styles.searchDiv}><img class={styles.searchImg} onClick={handleOnClickSearch} src="./search.svg" alt="" /></div>
            </div>
            <Navbar isSearchClicked={isSearchClicked} handleOnClickSearch={handleOnClickSearch}/>
        </>
    );
}