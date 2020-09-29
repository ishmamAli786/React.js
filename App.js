import React,{Component} from 'react';
import Header from './Header';

class App extends Component {
  constructor(){
    super()
      // this.state
      this.state={name:"Ishmam Ali",email:"ishmamalikhan@gmail.com",value:""}
      this.set_name=this.set_name.bind(this)
  }
  set_name=()=>{
    this.setState({
      name:this.state.value,
    })
  }
  get_name=()=>{
    console.log(this.state.name)
  }
  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  get_props(props){
   console.log(props)
  }
  render(){
    return(
      <div>
      <h2>My Name is {this.state.name}</h2>
      <h3>Email:{this.state.email}</h3>
      <input name="name" type="text" placeholder="Enter Your Name" onChange={(z)=>this.handleChange(z)}></input>
      <input name="email" type="text" placeholder="Enter Your Email" onChange={(z)=>this.handleChange(z)}></input>
      <button onClick={this.set_name}>Set Name</button>
      <button onClick={this.get_name}>Get Name</button>
      <Header get_props={this.get_props} name={this.state.name} page="Application Page"/>
      </div>
    )
  }
}

export default App;
