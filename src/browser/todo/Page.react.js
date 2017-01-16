import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import className from 'classnames';

import './todo.scss';

export default class ToDo extends Component {

  constructor(props) {
    super(props);
    this.addToDo = this.addToDo.bind(this);
    this.updateNewToDo = this.updateNewToDo.bind(this);
    this.checkKeyDown = this.checkKeyDown.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
    this.state = {
      newToDo: '',
      error: false
    }
  }

  updateNewToDo(e) {
    this.setState({newToDo: e.target.value});
  }

  checkKeyDown(e) {
    if(e.charCode === 13) {this.addToDo();}
  }

  addToDo() {
    const {newToDo} = this.state;
    const {actions} = this.props;
    if (newToDo === '') {return this.setState({error:true});}
    else {this.setState({error: false})}
    actions.todo_add(newToDo);
    this.setState({newToDo: ''});
  }

  removeToDo(id) {
    const {actions} = this.props;
    actions.todo_remove(id);
  }

  clearAll() {
    const {actions} = this.props;
    actions.todo_clearAll();
  }

  render() {
    const {
      todo: {todos}
    } = this.props;

    const {
      error: inputError
    } = this.state;

    const inputClasses = className({error: inputError})

    return(
      <section className="todos-page">
        <div className="container">
          <h1>To Do</h1>
          <p>A to do list built with redux...</p>
          <input className={inputClasses} type="text" placeholder="new todo" value={this.state.newToDo} onChange={this.updateNewToDo} onKeyPress={this.checkKeyDown}/>
          <button className="" onClick={this.addToDo} >Add To Do</button>
          <button className="red" onClick={this.clearAll} >Clear All</button>

          <ul>
            {todos && todos.map((todo, i) => {
              return (
                <li key={`todo_${i}`}>
                  {todo.text}
                  <span onClick={() => this.removeToDo(todo.id)} className="closeX"></span>
                </li>
              );
            })
            }
          </ul>
        </div>
      </section>
    );
  }
}
