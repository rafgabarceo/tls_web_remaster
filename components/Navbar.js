import Link from "next/link";
import styles from '../styles/Home.module.scss';
import Image from "next/image";

export default function Navbar() {
    return (
        <div className={`${styles.navbar} sticky`}>
            <Link href="/"><img className={`${styles.nav_logo} nav_logo`} alt="TLS logo"/></Link>
            <ul>
                <Link href="/section/university"><li>University</li></Link>
                <Link href="/section/menagerie"><li>Menagerie</li></Link>
                <Link href="/section/sports"><li>Sports</li></Link>
                <Link href="/section/vanguard"><li>Vanguard</li></Link>
                <Link href="/section/opinion"><li>Opinion</li></Link>
                <Link href="/about"><li>About Us</li></Link>
            </ul>
            <img className={styles.search} src="./search.svg" alt="" />
        </div>
    );

}