import React from 'react';
import PrimaryArticle from './PrimaryArticle.js';

class Section extends React.Component {

    render() {
        let articles = this.props.articles.map(article => <PrimaryArticle key={`${article.id}`} article={article}/>);
        return (
            <React.Fragment>
                <h1 className="heading">University</h1>
                <div className="articles">
                    <div className="primary-article">
                        {articles[0]}
                    </div>
                    <div className="secondary-articles">
                    <div className="secondary">
                        <div className="shade">
                        <div className="contents">
                            <p className="title">Heading</p>
                            <p className="authors">by Frank Santiago, Frank Santiago, & Frank Santiago</p>
                        </div>
                        </div>
                        <img className="image" src="" alt=""/>
                    </div>
                    <div className="secondary">
                        <div className="shade">
                        <div className="contents">
                            <p className="title">Heading</p>
                            <p className="authors">by Frank Santiago, Frank Santiago, & Frank Santiago</p>
                        </div>
                        </div>
                        <img className="image" src="" alt=""/>
                    </div>
                    <div className="secondary">
                        <div className="shade">
                        <div className="contents">
                            <p className="title">Heading</p>
                            <p className="authors">by Frank Santiago, Frank Santiago, & Frank Santiago</p>
                        </div>
                        </div>
                        <img className="image" src="" alt=""/>
                    </div>
                    <div className="secondary">
                        <div className="shade">
                        <div className="contents">
                            <p className="title">Heading</p>
                            <p className="authors">by Frank Santiago, Frank Santiago, & Frank Santiago</p>
                        </div>
                        </div>
                        <img className="image" src="" alt=""/>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Section;