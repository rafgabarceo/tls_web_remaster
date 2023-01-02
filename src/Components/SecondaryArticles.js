import React from 'react';
import SecondaryArticle from './SecondaryArticle.js';

class SecondaryArticles extends React.Component {

    render() {
        let secondaryArticles = this.props.articles.map(article => <SecondaryArticle key={`${article.id}`} article={article}/>);
        return (
            <div className="secondary-articles">
                {secondaryArticles}
            </div>
        );
    }
}

export default SecondaryArticles;