import React from 'react';


class PrimaryArticle extends React.Component {
    render() {
        let authorsList = this.props.article.authors.map(a => <a href="https://www.TheLaSallian.com/authors/">{a}</a>).reduce((prev, curr) => [prev, ', ', curr]);
        return (
            <div className="primary_article">
                <div className="img">
                </div>
                <div className="heading">
                    {this.props.title}
                </div>
                <div className="authors">
                    {authorsList}
                </div>
                <div className="snippet">
                    The quick brown fox jumps over the lazy dog
                </div>
            </div>
        );
    }
}

export default PrimaryArticle;