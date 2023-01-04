import PrimaryArticle from "./PrimaryArticle";
import SecondaryArticles from "./SecondaryArticles";

import styles from '../styles/Home.module.scss';

import { useState } from "react";
import Link from "next/link";

export default function Section({section}) {
    return (
        <div className={styles.section}>
            <h3 className={`${styles.sectionName} ${section.name}`}><Link href={`/section/${section.name.toLowerCase()}`}>{section.name}</Link></h3>
            <div className={styles.articles}>
                <PrimaryArticle key={section.articles[0].id} article={section.articles[0]}/>
                <SecondaryArticles articles={section.articles.slice(1)}/>
            </div>
            <hr styles={styles.hr}/>
        </div>
    );
}