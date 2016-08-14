import React, { Component } from 'react';

class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {name:props.name,age:props.age};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleAgeChange(e) {
    this.setState({age: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.state.name.trim();
    let age = this.state.age.trim();
    if (!name || !age) {
      return;
    }
    this.props.onSubmit({name,age});
    //this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={this.state.name}
        onChange={this.handleNameChange}
      />
      <input
        type="text"
        placeholder="Age"
        value={this.state.age}
        onChange={this.handleAgeChange}
      />
      <input type="submit" value="Post" />
      </form>
    );
  }
}

export default Form1;
