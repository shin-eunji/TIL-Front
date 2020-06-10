import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
          type="number"
        />
        <input
          name="password"
          placeholder="비밀번호"
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
        />
        <div>
          {this.state.name}
          {this.state.phone}
          {this.state.password}
        </div>
      </form>
    );
  }
}

export default PhoneForm;
