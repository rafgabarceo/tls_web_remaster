import React from 'react';


class PrimaryArticle extends React.Component {
    render() {
        console.log(this.props.article);
        let authorsList = this.props.article.authors.map(author => <a href={`https://www.TheLaSallian.com/author/${author.slug}`}>{author.display_name}</a>).reduce((prev, curr) => [prev, ', ', curr]);
        return (
            <div className="primary">
                <div className="shade">
                <div className="contents">
                    <p className="title" dangerouslySetInnerHTML={{__html: this.props.article.title.rendered}}/>
                    <p className="authors">by {authorsList}</p>
                    <p className="snippet" dangerouslySetInnerHTML={{__html: this.props.article.excerpt.rendered}}/>
                </div>
                </div>
                <img className="image" src={this.props.article.jetpack_featured_media_url} alt=""/>
            </div>

            // <div className="primary_article">
            //     <div className="img">
            //     </div>
            //     <div className="heading" dangerouslySetInnerHTML={{__html: this.props.article.title.rendered}}/>
            //     <div className="authors">
            //         by {authorsList}
            //     </div>
            //     <div className="snippet" dangerouslySetInnerHTML={{__html: this.props.article.excerpt.rendered}}/>
            // </div>
        );
    }
}

export default PrimaryArticle;