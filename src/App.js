import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      name_error:'',
      email_error:'',
    }
  };
  handleChange = e => {
    e.preventDefault();
    const name = this.state.name;
    this.setState({name:e.target.value,},()=>{
      this.validateName();
    });
  }
  validateName = () => {
    const { name } = this.state;
    this.setState({
      name_error:
        name.length > 3 ? null : 'short string! must be more than 3 character'
    });
  }
  handleChangeEmail = e => {
    e.preventDefault();
    const email = this.state.email;
    this.setState({
      email:e.target.value,
    });
  }
  render(){
    return (
      <div className="ParentDiv">
        <div className="backgroundPhoto">
        </div>
        <div className="childDiv">
          <form onSubmit="">
            <input className="inputStyles" onChange={this.handleChange}/>
            <span>{this.state.name_error}</span>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
