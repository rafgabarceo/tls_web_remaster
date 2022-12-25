import React from 'react';
import PrimaryArticle from './PrimaryArticle.js';
import SecondaryArticles from './SecondaryArticles.js';

class Section extends React.Component {

    render() {
        let articles = this.props.articles.map(article => <PrimaryArticle key={`${article.id}`} article={article}/>);
        
        return (
            <React.Fragment>
                <h1 className="heading">{this.props.section}</h1>
                <div className="articles">
                    <div className="primary-article">
                        {articles[0]}
                    </div>
                    <SecondaryArticles articles={this.props.articles.slice(1,5)}/>
                </div>
            </React.Fragment>
        );
    }

}

export default Section;