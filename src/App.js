import React from 'react';
import Section from './Components/Section';

function checkSection(section) {
    // Function inspired from: https://stackoverflow.com/questions/7759237/how-do-i-pass-an-extra-parameter-to-the-callback-function-in-javascript-filter
    return function(element) {
        if(element.section === section) return element;
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: [
                {
                    id: 0,
                    title: 'Something about sexual harassment',
                    date: '',
                    authors: ['Frank Santiago', 'Helen Saudi', 'Enrico Sebastian Salazar'],
                    image: 'image',
                    section: 'University',
                    article_type: ['Primary','News Feature']
                },
                {
                    id: 1,
                    title: 'Something about the police',
                    date: '',
                    authors: ['Helen Saudi', 'Enrico Sebastian Salazar'],
                    image: 'image',
                    section: 'University',
                    article_type: ['Secondary','News Feature']
                },
                {
                    id: 2,
                    title: 'Something about society',
                    date: '',
                    authors: ['Frank Santiago'],
                    image: 'image',
                    section: 'Menagerie',
                    article_type: ['Secondary','News Feature']
                },
                {
                    id: 3,
                    title: 'Something about sports',
                    date: '',
                    authors: ['Frank Santiago'],
                    image: 'image',
                    section: 'Sports',
                    article_type: ['Secondary','News Feature']
                },
            ],
        };
    }

    render() {
        let universityArticles = this.state.articles.filter(checkSection('University'));  
        // let menagerieArticles = this.state.articles.filter(checkSection('Menagerie'));  
        // let sportsArticles = this.state.articles.filter(checkSection('Sports'));  

        let universitySection = <Section articles={universityArticles} />;
        return (
            universitySection
        );
    }
}

export default App;