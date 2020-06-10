import React, { Component } from "react";

class PhoneForm extends Component {
  input = React.createRef();
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

  // 새로고침 방지
  handleSubmit = (e) => {
    //preventDefault: 원래 해야될 작업을 못하게 하는것.
    e.preventDefault();
    this.props.onCreate(
      this.state
      //   {
      //   name: this.state.name,
      //   phone: this.state.phone,
      //   password: this.state.password,
      //    }
    );
    // 등록 버튼 클릭 시, 초기화
    this.setState({
      name: "",
      phone: "",
      password: "",
    });
    this.input.current.focus();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
          type="text"
          ref={this.input}
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
        <button type="submit">등록</button>
        {/* <div>
          {this.state.name}
          {this.state.phone}
          {this.state.password}
        </div> */}
      </form>
    );
  }
}

export default PhoneForm;
