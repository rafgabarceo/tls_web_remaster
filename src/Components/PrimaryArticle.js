import React from 'react';


class PrimaryArticle extends React.Component {
    render() {
        let authorsList = this.props.authors.map(a => <a href="www.TheLaSallian.com/authors/{a}">{a}</a>).reduce((prev, curr) => [prev, ', ', curr]);
        console.log(authorsList);

        return (
            <div className="primary_article">
                <div className="img">
                </div>
                <div className="heading">
                    Article title
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