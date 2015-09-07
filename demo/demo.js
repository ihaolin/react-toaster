/**
 * Author: haolin
 * Date  : 8/30/15.
 * Email : haolin.h0@gmail.com
 */

var React = require('react');

var ReactToaster = require('../src/main');

require('./demo.css');

var Demo = React.createClass({
    displayName: 'ReactToastDemo',
    onShow: function(){
        this.refs.toast.show('<span>Hei, hei</span>');
    },
    onHide: function(){
        this.refs.toast.hide();
    },
    render: function(){
        return (
            <div className="demo">
                <ReactToaster ref="toast" modal={true} css={{background: 'red'}} />
                <input type="button" value="Show" onClick={this.onShow}/>
                <input type="button" value="Hide" onClick={this.onHide}/>
            </div>
        );
    }
});

React.render(<Demo />, document.getElementById('toast'));

