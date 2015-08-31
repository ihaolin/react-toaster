/**
 * Author: haolin
 * Date  : 8/29/15.
 * Email : haolin.h0@gmail.com
 */

var React = require('react');

module.exports = React.createClass({
    styles:{
        position: 'absolute',
        textAlign: 'center',
        padding: '10px',
        margin: '0 auto'
    },
    displayName: 'ReactToaster',
    getInitialState: function(){
        return {
            display: 'none',
            content: '',
            idModal: false,
        };
    },
    getDefaultProps: function(){
        return {
            auto: true,
            duration: 2000,
            width: '55%',
            left: '20%',
            top: '40%',
            color: '#fff',
            background: 'rgba(0, 0, 0, 0.5)',
            opacity: .8,
            zIndex: 9999,
            fontSize: '20px'
        };
    },
    componentDidMount: function(){
        // custom styles
        for (var p in this.props){
            this.styles[p] = this.props[p];
        }
    },
    componentDidUpdate: function(){
        if(this.state.display === '' && this.props.auto){
            // auto hide
            setTimeout(this.hide, this.props.duration);
        }
    },
    show: function(content){
        if (this.state.display === 'none') {
            content = content || '';
            this.setState({display: '', content: content});
        }
    },
    hide: function(){
        if(this.state.display === ''){
            this.setState({display: 'none'});
        }
    },
    render: function(){
        var style = this.styles;
        style.display = this.state.display;
        return (
            <div style={style}>
                <span>{this.state.content}</span>
            </div>
        );
    }
});