import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTodo, Delete } from '../../actions/index'


class Todo extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }
handleClick = (e)=> {
  let num = parseInt(e.target.value, 10)
  this.props.dispatch(Delete(num))
}
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.input.value))
    this.input.value = ''
  }
  render(){
    return(
      <div>
        <h1>This is Todo</h1>
        <button > <Link to='/'>Home</Link></button>
        <form onSubmit={this.handleSubmit}>
          ADD TODO: <input type="text" ref={node=>{this.input = node}}  /><br/>
          <input type="submit" />

        </form>
      <ul><li>Hello</li>
        {this.props.todos.map(post =>
    <li key={post.id}>{post.text}<button value={post.id} onClick={this.handleClick} >DEL</button></li>
  )}
      </ul>
      </div>
    )
  }
}
  const store = (store) =>{
    return {
      todos: store.todos
    }
}

Todo = connect(store)(Todo)
export default Todo
