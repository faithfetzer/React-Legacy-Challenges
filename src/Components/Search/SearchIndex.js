import React, {Component} from 'react';
import { Input } from 'reactstrap';

export default class SearchIndex extends Component {
  constructor(props){
  super(props);
  this.state = {
    things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
    search: ''
  }

  this.handleChange = this.handleChange.bind(this)
  this.searchFunction = this.searchFunction.bind(this)
  }

  handleChange(event){
    this.setState({search: event.target.value})

  }

  searchFunction(){
    if(this.state.search !== ''){
      this.setState({
        things: [this.state.things].filter(str => str.includes(this.state.search)
        )
    })
  }
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <Input placeholder='Search Here' value={this.state.search} onChange={this.handleChange}/>
        <button onClick={this.searchFunction}>Search</button>
        <h3>Results:</h3>
        {this.state.things.map(thing => <p>{thing}</p>)}
      </div>
    )
  }
}

