import React, {Component} from 'react';

export default class DogIndex extends Component{
    constructor(props) {
        super(props)
        this.state= {
        url: ''
    }
    this.fetchDog= this.fetchDog.bind(this)
    }

    fetchDog(){
        fetch('https://dog.ceo/api/breeds/image/random', {
            method: 'GET'
        })
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(res => this.setState({
                url: res.message
            }))
    }

    componentDidMount(){
        this.fetchDog()
    }

    render(){
        return(
        <div>
            <img src={this.state.url} style={{height: '300px'}}/>
            <br/>
            <button onClick={this.fetchDog}>See a New Dog Image!</button>
        </div>
        )
    }
}
