import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: 
        [],
      zip: ''
    }
  }

  componentDidMount() {

  }

  handleSearch (city, zip) {
    var data = {
      zip: zip,
      city: city
    }
    //console.log(zip +' : '+ city);
      $.ajax({
      url: '/properties',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',

      success: (data) => {
        console.log("back to client<<<<<<<<<<",data);
        this.setState({
          items: data

        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      
      <h1>House Listings</h1>
      <div className="banner">
      <div className="search">
      <Search  className="searchBar" handleSearch={this.handleSearch.bind(this)}/>
      {console.log(this.state.items)}
      </div>
      </div>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));