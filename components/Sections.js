import Section from "./Section";
import styles from '../styles/Home.module.scss';

export default function Sections(props) {
    //I didn't deconstruct {sections} because I really wanted to use the sections variable name lmao
    const sections = props.sections.map(section => <Section key={`sec-${section.name}`} section={section}/>);
    return (
        <>
            {sections}
            <hr className={styles.sectionsHr}/>
        </>
    );
}