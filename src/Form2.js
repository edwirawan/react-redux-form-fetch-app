import React, { Component } from 'react';

class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {occupation:props.occupation,salary:props.salary};
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleOccupationChange = this.handleOccupationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSalaryChange(e) {
    this.setState({salary: e.target.value});
  }

  handleOccupationChange(e) {
    this.setState({occupation: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let salary = this.state.salary.trim();
    let occupation = this.state.occupation.trim();
    if (!salary || !occupation) {
      return;
    }
    this.props.onSubmit({occupation,salary});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="Occupation"
        value={this.state.occupation}
        onChange={this.handleOccupationChange}
      />
      <input
        type="text"
        placeholder="Salary"
        value={this.state.salary}
        onChange={this.handleSalaryChange}
      />
      <input type="submit" value="Post" />
      </form>
    );
  }
}

export default Form2;
