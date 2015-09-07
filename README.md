React-toaster
=========

A toast style message tip of React

## Installation

  npm install react-toaster --save-dev

## Usage
	
* Basic:
		
```javascript	
var Demo = React.createClass({
    displayName: 'ReactToasterDemo',
    onShow: function(){
        this.refs.toast.show('<span>Hei, hei</span>');
    },
    onHide: function(){
        this.refs.toast.hide();
    },
    render: function(){
        return (
            <div className="demo">
                <ReactToaster ref="toast" />
                <input type="button" value="Show" onClick={this.onShow}/>
                <input type="button" value="Hide" onClick={this.onHide}/>
            </div>
        );
    }
});
```
* Configuration:

```javascript
// css
{
    width: '55%',	
    left: '20%',			
    top: '40%',
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.5)',
    opacity: .8,
    zIndex: 9999,
    fontSize: '20px'
}

// props
{
	auto: true,		// auto hide or not,
	duration: 2000, 	// hide timeout
	modal: false,		// modal or not
}

// usage
<ReactToaster ref="toast" duration="1000" modal={false} auto={true} css={{background: 'red'}} />
```
* Methods
	
```javascript
show: 
	Show the toast with content;
hide: 
	Hide the toast manually.
```
* Maybe it's more suitable for **Mobile Web App**.

## Release History

* 0.0.1 
	* It's the simplest implementation.
* 0.0.2
   * add **fontSize** property and update doc.  
* 0.0.3
	* support **modal**;
	* extract style custom with **css** props.
