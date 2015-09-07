/**
 * Author: haolin
 * Date  : 8/29/15.
 * Email : haolin.h0@gmail.com
 */

var React = require('react');

var ReactToaster = React.createClass({
    displayName: 'ReactToaster',
    styles:{
        position: 'absolute',
        textAlign: 'center',
        padding: '10px',
        margin: '0 auto',
        width: '55%',
        left: '20%',
        top: '40%',
        color: '#fff',
        background: 'rgba(0, 0, 0, 0.5)',
        opacity: .8,
        zIndex: 9999,
        fontSize: '20px'
    },
    getInitialState: function(){
        // init custom style
        var css = this.props.css;
        if (css){
            for (var p in css){
                this.styles[p] = css[p]; 
            }
        }
        return {
            display: 'none',
            content: '',
            auto: true,
            duration: 2000
        };
    },
    componentDidUpdate: function(){
        if(this.state.display === '' && this.state.auto){
            // auto hide
            setTimeout(this.hide, this.state.duration);
        }
    },
    show: function(content){
        if (this.state.display === 'none') {
            content = content || '';
            this.setState({display: '', content: content});
            this.refs.cover.show();
        }
    }, 
    hide: function(){
        if(this.state.display === ''){
            this.setState({display: 'none'});
            this.refs.cover.hide();
        } 
    },
    render: function(){
        var style = this.styles;
        style.display = this.state.display;
        if (this.props.modal){
            return (
                <div>
                    <ReactToasterCover ref="cover" zIndex={style.zIndex - 1} />
                    <div style={style} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                </div>
            );
        } else {
            return (
                <div style={style} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            );
        }
    }
});

var ReactToasterCover = React.createClass({
    getInitialState: function(){
        return {
            scrolling: 'no',
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            zIndex: this.props.zIndex !== undefined ? this.props.zIndex : 9998,
            backgroundColor: 'transparent',
            display: 'none'
        };
    },
    show: function(content){
        if (this.state.display === 'none') {
            this.setState({display: ''});
        }
    }, 
    hide: function(){
        if(this.state.display === ''){
            this.setState({display: 'none'});
        } 
    },
    render: function(){
        return (
            <div style={this.state}></div>
        );
    }
});

module.exports = ReactToaster;