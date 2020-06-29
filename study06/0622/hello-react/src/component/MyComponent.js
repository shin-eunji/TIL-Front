import React, { Component } from "react";
import PropTypes from "prop-types";

// 함수형 컴포넌트
// const MyComponent = (props) => {
//   const { name, favoriteNumber, children } = props;
//   return (
//     <div>
//       <h1>안녕하세요. 제 이름은 {name}입니다.</h1>
//       <h2>children 값은 {children} 입니다.</h2>
//       <p>제가 좋아하는 숫자는 {favoriteNumber}입니다.</p>
//     </div>
//   );
// };

// 클래스형 컴포넌트
class MyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
    children: "기본 값",
  };
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        <h1>안녕하세요. 제 이름은 {name}입니다.</h1>
        <h2>children 값은 {children} 입니다.</h2>
        <p>제가 좋아하는 숫자는 {favoriteNumber}입니다.</p>
      </div>
    );
  }
}

export default MyComponent;
