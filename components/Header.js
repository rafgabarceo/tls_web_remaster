import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="logo">
                <Link href="/"><Image src="./tls.svg" width={800} height={200}/></Link>
            </div>
            <hr />
            <Navbar/>
            <hr />
        </>
    );
}