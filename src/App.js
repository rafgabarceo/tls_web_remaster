import React from 'react';
import PrimaryArticle from './Components/PrimaryArticle';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            authors: ['Frank Santiago', 'Helen Saudi', 'Enrico Sebastian Salazar'],
            articles: [
                {
                    title: 'Something about sexual harassment',
                    date: '',
                    authors: ['Frank Santiago', 'Helen Saudi', 'Enrico Sebastian Salazar'],
                    image: 'image',
                    section: 'University',
                    article_type: 'News Feature'
                },
                {},
                {}
            ],
        };
    }

    render() {
        return (
            <PrimaryArticle authors={this.state.authors}/>
        );
    }
}

export default App;