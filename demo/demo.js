/**
 * Author: haolin
 * Date  : 8/30/15.
 * Email : haolin.h0@gmail.com
 */

var React = require('react');

var ReactToast = require('../src/main');

require('./demo.css');

var Demo = React.createClass({
    displayName: 'ReactToastDemo',
    onShow: function(){
        this.refs.toast.show('Hei, hei');
    },
    onHide: function(){
        this.refs.toast.hide();
    },
    render: function(){
        return (
            <div className="demo">
                <ReactToast ref="toast" />
                <input type="button" value="Show" onClick={this.onShow}/>
                <input type="button" value="Hide" onClick={this.onHide}/>
            </div>
        );
    }
});

React.render(<Demo />, document.getElementById('toast'));

