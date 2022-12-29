import React from 'react';


class PrimaryArticle extends React.Component {
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

        let cleanedSnippet = "";
        console.log(this.props.article.title.rendered.length);
        if(this.props.article.title.rendered.length < 50) {
            let shortenedSnippet = this.props.article.excerpt.rendered.substring(0,140);
            let spaceIndex = shortenedSnippet.lastIndexOf(' ');
            cleanedSnippet = shortenedSnippet.substring(0,spaceIndex) + `... <a href=${this.props.article.link}>Read More</a></p>`;
        } else {
            let shortenedSnippet = this.props.article.excerpt.rendered.substring(0,120);
            let spaceIndex = shortenedSnippet.lastIndexOf(' ');
            cleanedSnippet = shortenedSnippet.substring(0,spaceIndex) + `... <a href=${this.props.article.link}>Read More</a></p>`;
        }
        return (
            <div className="primary">
                <div className="shade">
                <div className="contents">
                    <a href={this.props.article.link}><p className="title" dangerouslySetInnerHTML={{__html: this.props.article.title.rendered}}/></a>
                    <p className="authors">by {authorsList}</p>
                    <p className="snippet" dangerouslySetInnerHTML={{__html: cleanedSnippet}}/>
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