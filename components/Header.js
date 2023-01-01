import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className="logo">
                <h1>The LaSallian</h1>
            </div>
            <hr />
            <Navbar/>
            <hr />
        </>
    );
}