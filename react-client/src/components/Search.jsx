import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cityInput: '',
			zipInput: ''
		}
		this.updateCity = this.updateCity.bind(this);
		this.updateZip = this.updateZip.bind(this);
		this.search = this.search.bind(this);
	}

	updateCity (e) {
		//console.log('city: ',e.target.value);
		this.setState({
			cityInput: e.target.value
		})
	}

	updateZip (e) {
		//console.log('zip', e.target.value);
		this.setState({
			zipInput: e.target.value
		})
	}

	search(){
		
		var city = this.state.cityInput;
		var zip = this.state.zipInput
		this.props.handleSearch(city,zip);

		this.setState({
			zipInput:'',
			cityInput: ''
		})
	}



  handleSearch (city, zip) {
    console.log(zip +' : '+ city);
  }

	render () {
		return (
		  <div>
		    <form>
		    	<div>
		    		<p className="selectCity">select city</p>
		        	<input 
		        	type="text" 
		        	id="city" placeholder="Search city..."
		        	onChange={this.updateCity}
		        	value={this.state.cityInput} />

		    		<p className="selectZip">select zip</p>
		        	
		        	<input 
		        	type="INT" 
		        	size="5" maxLength="5" 
		        	pattern="[0-9]{5}" 
		        	title="Five digit zip code" 
		        	onChange={this.updateZip}
		        	value={this.state.zipInput}/>
		        	<button 
		        	type="button" 
		        	onClick={this.search}
		        	>search</button>
		         </div>
		    </form>
		  </div>

		)
	}
}

export default Search;
