require('!style!css!sass!./main.scss');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';


class Markup extends Component {

    constructor(){
        super(...arguments)
        this.state = {
            markme: "# Type Some Markdown"
        };
    }

    changeText(event){
        this.setState({markme: event.target.value})
    }

    render(){


        return (
            <div>
                <h1 id="title">Markdown Generator</h1>
                <h3 id="sub-title">Built with React.js</h3>
                <div id="wrapper">

                    <textarea id="write-here"
                              rows="25"
                              value={this.state.markme}
                              onChange={this.changeText.bind(this)}>
                    </textarea>

                    <div id="display-markup">
                        <span dangerouslySetInnerHTML={{__html:marked(this.state.markme)}}></span>
                    </div>

                </div>
                <h3 id="helper"><a href="https://en.wikipedia.org/wiki/Markdown">
                    Click here to read about Markdown on Wikipedia
                </a></h3>
            </div>

        );

    }
}



ReactDOM.render(<Markup />, document.getElementById('container'));
