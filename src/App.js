import React from 'react';
import Section from './Components/Section.js';

import axios from 'axios';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            section: []
        }
    }

    componentDidMount() {
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
            this.setState({
                section: <Section articles={response.data} section={this.props.section}/>
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    
    render() {
        return (
            this.state.section
        );
    }
}

export default App;