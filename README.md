React-toast
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
        this.refs.toast.show('Hei, hei');
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
* Properties:

```javascript
{
    auto: true, 			// auto hide or not
    duration: 2000,	
    width: '55%',	
    left: '20%',			
    top: '40%',
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.5)',
    opacity: .8,
    zIndex: 9999
}

// usage
<ReactToaster ref="toast" duration="1000" background="yellow" .../>
```
* Maybe it's more suitable for **Mobile Web App**.

## Release History

* 0.0.1 
	* First release: It's the simplest implementation.
