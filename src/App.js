import React from 'react';
import Section from './Components/Section.js';

import axios from 'axios';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            universitySection: [],
            menagerieSection: [],
            message: <h1>hello state</h1>
        }
    }

    componentDidMount() {
        axios.get('https://thelasallian.com/wp-json/wp/v2/posts?_fields=id,authors,excerpt,title,link,categories,jetpack_featured_media_url&categories=4')
        .then(response => {
            this.setState({
                universitySection: <Section articles={response.data}/>
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }
    
    render() {
        // let universitySection = <Section articles={universityArticles}/>;
        return (
            this.state.universitySection
        );
    }
}

export default App;