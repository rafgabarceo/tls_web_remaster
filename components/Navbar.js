import Link from "next/link";
import styles from '../styles/Home.module.scss';
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const handleOnClickSearch = () => {
        setIsSearchClicked(prevState => !prevState);
    };

    const handleOnClickMenu = () => {
        setIsMenuClicked(prevState => !prevState);
    };

    // Now, you may be asking me why did you use a normal img tag? Because Next/Image doesn't actually put the real class names smh stupid ass software architecture design complexities...
    return (
        <div className={`${styles.navbar} sticky`}>
            {isSearchClicked ? 
                <>
                    <div className={styles.closeDiv} href="/"><Image className={styles.closeImg} onClick={handleOnClickSearch} src="./close.svg" width={50} height={50}/></div> 
                    <ul className={styles.searchbar}>
                        <input type="text" /> 
                    </ul>
                </>
                :
                <>
                    <div className={styles.menuDiv}><Image className={styles.menuImg} src="./menu.svg" width={50} height={50} alt="" /></div>
                    <div className={`navLogoLinkDiv ${styles.navLogoLinkDiv}`}><Link href="/"><img className={`${styles.navLogo} navLogo`} alt="TLS logo"/></Link> </div>
                    <div className={styles.logoImgMobile}>
                        <Link className={styles.logoImgMobileLink} href="/"><Image src="./tls-minimal.svg" width={220} height={50} alt="" /></Link>
                    </div>
                    <ul className={styles.list}>
                        <Link href="/section/university"><li>University</li></Link>
                        <Link href="/section/menagerie"><li>Menagerie</li></Link>
                        <Link href="/section/sports"><li>Sports</li></Link>
                        <Link href="/section/vanguard"><li>Vanguard</li></Link>
                        <Link href="/section/opinion"><li>Opinion</li></Link>
                        <Link href="/about"><li>About Us</li></Link>
                    </ul>
                </>
            }
            <div className={styles.searchDiv}><Image className={styles.searchImg} onClick={handleOnClickSearch} src="./search.svg" width={50} height={50} alt="" /></div>
        </div>
    );

}