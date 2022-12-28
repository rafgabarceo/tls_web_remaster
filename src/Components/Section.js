import React from 'react';
import PrimaryArticle from './PrimaryArticle.js';
import SecondaryArticles from './SecondaryArticles.js';

class Section extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h1 className="heading">{this.props.section}</h1>
                <div className="articles">
                    <div className="primary-article">
                        <PrimaryArticle key={`${this.props.articles[0].id}`} article={this.props.articles[0]}/>
                    </div>
                    <SecondaryArticles articles={this.props.articles.slice(1,5)}/>
                </div>
            </React.Fragment>
        );
    }

}

export default Section;