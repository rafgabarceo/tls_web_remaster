import React from 'react';

class SecondaryArticle extends React.Component {

    render() {
        let authorsList = this.props.article.authors.map((author, i, authors) => 
            {
                if(authors.length === 1) return (<a href={`https://www.TheLaSallian.com/author/${author.slug}`}>{author.display_name}</a>);
                else if (authors.length === 2) {
                    if (i+1 === authors.length) 
                        return (
                        <React.Fragment>
                            <span> and </span>
                            <a href={`https://www.TheLaSallian.com/author/${author.slug}`}>{author.display_name}</a>
                        </React.Fragment>
                        );
                    else 
                        return (<a href={`https://www.TheLaSallian.com/author/${author.slug}`}>{author.display_name}</a>);
                } else if(authors.length > 2) {
                    if (i + 1 === authors.length)
                        return (
                        <React.Fragment>
                            <span> and </span>
                            <a href={`https://www.TheLaSallian.com/author/${author.slug}`}>{author.display_name}</a>
                        </React.Fragment>
                        );
                    else
                        return (<a href={`https://www.TheLaSallian.com/author/${author.slug}`}>{author.display_name}, </a>);
                }
            });
        
        return (
            <div className="secondary">
                <div className="shade">
                    <div className="contents">
                        <a href={this.props.article.link}><p className="title" dangerouslySetInnerHTML={{__html: this.props.article.title.rendered}}/></a>
                        <p className="authors">by {authorsList}</p>
                    </div>
                </div>
                <img className="image" src={this.props.article.jetpack_featured_media_url} alt=""/>
            </div>
        );
    }

}

export default SecondaryArticle;