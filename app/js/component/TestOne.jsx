/* TestOne.js */
'use strict';
var React = require('react');

// include 需要的scss
var basicStyle = require('../../sass/base.scss');

var TestOne = React.createClass({
    render() {
        return (
            // 加上className就可以套用引入的 css or sass了
            <div className="base-content">Hello I am TestOne Component</div>
        );
    }
});

module.exports = TestOne;
