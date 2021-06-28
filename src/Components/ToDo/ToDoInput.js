import React, {Component} from 'react';
import { Input } from 'reactstrap';


export default class ToDoInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            completedList: [],
            newItem: ''
        }
        this.addItem = this.addItem.bind(this)
        this.completeItem = this.completeItem.bind(this)
        this.handleNew = this.handleNew.bind(this)
    }

    handleNew(event){
                this.setState({newItem: event.target.value})
            // console.log(this.newItem)
        }

    addItem(e){
        e.preventDefault()
        // console.log('add')
        this.setState({
            list: [...this.state.list, this.state.newItem],
            newItem: ''
        })
        // console.log(this.state.list)
    }

    completeItem(index){
        // console.log(index)
        this.setState({
            completedList: [...this.state.completedList, this.state.list[index]]
        })
        this.state.list.splice(index, 1)
        this.setState({
            list: this.state.list
        })
        // console.log(this.state.list)
        // console.log(this.state.completedList)
    }

    

    render(){
        return(
            <div>
                <h2>To Do List</h2>
                <form onSubmit={this.addItem}>
                <Input placeholder='What do you need to do next?' value={this.state.newItem} onChange={this.handleNew} />
                <br/>
                <button type="submit">Add Item</button>
                <hr/>
                </form>
                <ul style={{listStyleType: 'none'}}>
                {this.state.list.map((item,index) => <li>{item} <button value={index} onClick={() => this.completeItem(index)}>Complete</button></li>)}
                {this.state.completedList.map(doneItem => <li style={{textDecoration: 'line-through'}}>{doneItem}</li>)}
                </ul>
            </div>
        )
    }
}