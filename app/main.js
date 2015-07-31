'use strict';

var React = require('react');
var TestOne = require('./TestOne.js');
var TestTwo = require('./TestTwo.js');

var Main = React.createClass({
    getInitialState: function() {
        return {
          switch: true
        };
    },
    _toggle() {
        this.setState({
            switch: !this.state.switch
        });
    },
    render() {
        return (
            <div>
                <input type="button" onClick={this._toggle} value="Press Me!"/>
                {this.state.switch ? <TestOne /> : <TestTwo />}
            </div>
        );
    }
});


React.render(<Main />, document.body);
