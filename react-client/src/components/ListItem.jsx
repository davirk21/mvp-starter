import React from 'react';

class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: [

			]
		}
		
	}

	render () {
		return (
			<div >
		  <div className="everything">
		  {console.log("this...", this.props)}
		  
		  	<img className="houseImage"src='data:image/jpeg;base64,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'/>
	
		  	<div className="houseInfo">
			    <ul id="info">
			    	<li> { (function fix(address){
			    			var parts = address.split(" ");
			    			 parts[0] = parseInt(parts[0]);
			    			 return parts.join(' ')
			    			})(this.props.item.address)

			    		
			    		}</li>
			    	<li>{ this.props.item.postal}</li>
			    </ul>
		    </div>
		  </div>
		  </div>
		)
	}
}
export default ListItem;