import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import styles from '../styles/Home.module.scss';

export default function Header() {
    return (
        <>
            <div className={styles.logoDiv}>
                <Link href='/'><Image className={styles.logoImg} alt="TLS logo"/></Link>
            </div>
            <Navbar />
        </>
    );
}