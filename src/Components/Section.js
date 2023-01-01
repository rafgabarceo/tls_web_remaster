import React from 'react';
import PrimaryArticle from './PrimaryArticle.js';
import SecondaryArticles from './SecondaryArticles.js';

import axios from 'axios';

class Section extends React.Component {

    constructor() {
        super();
        this.state = {
            primaryArticle: null,
            secondaryArticles: null,
        }
    }

    componentDidMount() {
        console.log("hello");
        let category = 0;
        //8 == menage
        //6 == sports
        //1883 == vanguard
        //5 == opinion
        switch(this.props.section) {
            case 'University':
                category = 4;
                break;
            case 'Menagerie':
                category = 8;
                break;
            case 'Sports':
                category = 6;
                break;
            case 'Vanguard':
                category = 1883;
                break;
            case 'Opinion':
                category = 5;
                break;
            default:
                category = 0;
                break;
        }

        axios.get('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,link,categories,jetpack_featured_media_url&categories='+category)
        .then(response => {
            console.log(response.data.slice(1,5));
            this.setState({
                primaryArticle: <PrimaryArticle key={response.data[0].id} article={response.data[0]}/>,
                secondaryArticles: <SecondaryArticles articles={response.data.slice(1,5)}/>
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="heading">{this.props.section}</h1>
                <div className="articles">
                    <div className="primary-article">
                        {this.state.primaryArticle}
                    </div>
                    {this.state.secondaryArticles}
                </div>
            </React.Fragment>
        );
    }

}

export default Section;