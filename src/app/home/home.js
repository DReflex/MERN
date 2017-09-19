import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addExpress, deleteExpress, getExpress, resetExpress } from '../../actions/express'
import { changeButton } from '../../actions/button'



class Home extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getData = this.getData.bind(this);
    this.saveData = this.saveData.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  //FUNCTIONS
  handleSave = () =>{
    this.saveData()
    console.log(this.props.button)
    this.props.dispatch(changeButton())

    setTimeout(()=>{
      this.props.dispatch(changeButton())
      console.log(this.props.button)
    }, 1500)
  }
  saveData = () =>{
    fetch('/api/todos').then(data =>{
      return data.json();
    }).then(res => {
      res.map(data => fetch(`api/todos/${data._id}`,{
        method: "DELETE"
      }))
    })
    this.props.express.map(res=>{
      fetch('/api/todos', {
              method: 'POST',
              mode: 'CORS',
              body: JSON.stringify({
                data:{
                  text: res.text,
                }
              }),
              headers: {
                  'Content-Type': 'application/json'
              }
          })
    })
  }

  getData =()=>{
    this.props.dispatch(resetExpress())
    fetch('/api/todos').then(function(data){
      return data.json();
    }).then( res => {
      res.map(res => res.data
        .map(each => this.props.dispatch(getExpress(each.text))))
    })
  }

 handleClick = (e)=> {
  let num = parseInt(e.target.value, 10)
  this.props.dispatch(deleteExpress(num))
}
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return
    }
    this.props.dispatch(addExpress(this.input.value))
    this.input.value = ''
  }

  //END OF FUNCTIONS
  render(){
    console.log(this.props.express)
    return (
      <div>
        <h1>This is Home</h1>
        <button><Link to='/todo'>Todo</Link></button>
          <form onSubmit={this.handleSubmit}>
            ADD TODO: <input type="text" ref={node=>{this.input = node}}  /><br/>
            <input type="submit" />

          </form>
        <ul>
          {this.props.express.map(post =>
      <li key={post.id}>{post.text}<button value={post.id} onClick={this.handleClick} >DEL</button></li>
    )}
        </ul>
        <button disabled={this.props.button.disable} onClick={this.getData}>GET EXPRESS</button>
        <button onClick={this.handleSave}>Save Expressso</button>
      </div>
    )
  }
}
const store = (store) =>{
  return {
    express: store.express,
    button: store.button
  }
}
Home = connect(store)(Home)

export default Home
