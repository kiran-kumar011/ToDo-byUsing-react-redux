import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }
  handleChange = (e) => {
    this.setState(  {value: e.target.value})
  }
  handleClick = () => {
    if(this.state.value != '') {
        this.props.dispatch({type: 'ADD', name: this.state.value});
        this.setState({value: ''})
    }  
  }
  handleInputCheck = (index) => {
    this.props.dispatch({type: 'TOGGLE_CHECK', id: index})
  }
  handleDelete = (index) => {
    this.props.dispatch({type: 'DELETE_TODO', id: index})
  }
  handleEnter= (e) => {
    console.log(e.key)
    if(e.key === 'Enter') {
      this.handleClick();
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className='inputWrapper'>
        <input type='text' onKeyPress={this.handleEnter} onChange={this.handleChange} value={this.state.value} placeholder='Enter todo-list'/>
        <ul>
          {
            this.props.todos.map(todo => {
              return (
                <div  className='listWrap' key={todo.id}>
                  <div className='alignment'>
                    <li className='list'>
                      <input type='checkbox' checked={todo.isDone} onChange={() => this.handleInputCheck(todo.id)}/>
                      <p>{todo.name}</p>
                      <p className='delete' onClick={() => this.handleDelete(todo.id)}>X</p>
                    </li>
                  </div>
                </div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state,
  }
}
export default connect(mapStateToProps)(App);
