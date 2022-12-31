import Section from "./Section";

export default function Sections(props) {
    //I didn't deconstruct {sections} because I really wanted to use the sections variable name lmao
    const sections = props.sections.map(section => <Section key={section.name} section={section}/>);
    return (
        <>
            <h2>sections</h2>
            {sections}
        </>
    );
}