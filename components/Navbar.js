import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <Link href="/section/university"><li>univ</li></Link>
                <Link href="/section/menagerie"><li>menage</li></Link>
                <Link href="/section/sports"><li>sports</li></Link>
                <Link href="/section/vanguard"><li>vanguard</li></Link>
                <Link href="/section/opinion"><li>opinion</li></Link>
                <Link href="/about"><li>about</li></Link>
            </ul>
        </div>
    );

}