import PrimaryArticle from "./PrimaryArticle";
import SecondaryArticles from "./SecondaryArticles";

import styles from '../styles/Home.module.scss';

import { useState } from "react";

export default function Section({section}) {
    return (
        <div className={styles.section}>
            <h3>{section.name}</h3>
            <div className={styles.articles}>
                <PrimaryArticle key={section.articles[0].id} article={section.articles[0]}/>
                <SecondaryArticles articles={section.articles.slice(1)}/>
            </div>
        </div>
        
    );
}