import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

import styles from '../styles/Home.module.scss';

export default function Header() {
    return (
        <>
            <div className={styles.logo}>
                <Link href="/"><img alt="TLS logo"/></Link>
            </div>
            <hr />
            <Navbar/>
            <hr />
        </>
    );
}