import React from 'react';
import PrimaryArticle from './PrimaryArticle';

class Section extends React.Component {

    render() {
        let articles = this.props.articles.map(article => <PrimaryArticle article={article}/>);
        return (
            articles
        );
    }

}

export default Section;