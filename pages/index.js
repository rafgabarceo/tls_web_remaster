import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            <h1>Home page</h1>
            <div>article by <Link href="/by/frank-santiago">Frank Santiago</Link></div>
            <div>article by <Link href="/by/enrico-sebastian">Enrico Sebastian</Link></div>
            <div>article by <Link href="/by/helen-saudi">Helen Saudi</Link></div>
        </React.Fragment>
    );
}