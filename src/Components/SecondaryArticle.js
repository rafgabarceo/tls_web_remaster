import React from 'react';

class SecondaryArticle extends React.Component {

    render() {
        // let authorsList = this.props.article.authors.map(author => <a href={`https://www.TheLaSallian.com/author/${author.slug}`}>{author.display_name}</a>).reduce((prev, curr) => [prev, ', ', curr]);
        
        let authorsList = '';
        for(let i=0; i < this.props.article.authors.length; i++) {
            if(this.props.article.authors.length > 2) {
                if (this.props.article.authors.length-1 == i) {
                    authorsList += 'and ' + this.props.article.authors[i].display_name;
                } else {
                    authorsList += this.props.article.authors[i].display_name + ', ';
                }
            } else if(this.props.article.authors.length == 2) {
                if (this.props.article.authors.length-1 == i) {
                    authorsList += this.props.article.authors[i].display_name;
                } else {
                    authorsList += this.props.article.authors[i].display_name + ' and ';
                }
            } else {
                authorsList = this.props.article.authors[i].display_name;
            }
        }
        
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