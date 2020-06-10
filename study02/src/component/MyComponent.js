import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    value: 0,
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    // 다음으로 받아올 props 값
    // 현재 업데이트 되기 전 상태를 가져옴

    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value === 10) return false;

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log("value값이 바뀌었습니다.", this.props.value);
    }
  }

  componentWillUnmount() {
    console.log("goodbye");
  }

  render() {
    return (
      <div>
        {this.props.missiong.something}
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;
