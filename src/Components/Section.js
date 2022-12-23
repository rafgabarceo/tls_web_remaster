import React from 'react';
import PrimaryArticle from './PrimaryArticle.js';

class Section extends React.Component {

    render() {
        let articles = this.props.articles.map(article => <PrimaryArticle key={article.id} article={article}/>);
        return (
            articles
        );
    }

}

export default Section;