import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputForm_value:''
    }
  };
  handleChange = e => {
    e.preventDefault();
    const inputForm_value = this.state.inputForm_value;
    this.setState({
      inputForm_value:e.target.value,
    });
    alert(this.state.inputForm_value);
  }
  render(){
    return (
      <div className="ParentDiv">
        <div className="childDiv">
          <form onSubmit="">
            <input className="inputStyles" onChange={this.handleChange}/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
