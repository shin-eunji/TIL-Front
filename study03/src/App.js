import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 0;

  state = {
    information: [
      {
        id: "0",
        name: "홍길동",
        phone: "010-0000-0000",
        password: "1234",
      },
      {
        id: "1",
        name: "신은지",
        phone: "010-0000-0001",
        password: "5678",
      },
      {
        id: "2",
        name: "임동희",
        phone: "010-0000-0002",
        password: "9012",
      },
    ],
    keyword: "",
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleCreate = (data) => {
    const { information } = this.state;
    // 불변성 유지를 위해
    // 어떤한 값을 수정하기 위해 setState
    // 내부의 배열이나 객체를 바꾸기 위해 새로운 객체, 배열을 만들어 값을 주입해줘야하는 concat 내장함수를 사용
    this.setState({
      // information: this.state.information.concat(data),  - 비구조할당을 사용하여 this.state를 빼내어
      information: information.concat(
        Object.assign({}, data, {
          id: this.id++, // id값이 증가하면서 값이 추가됨.
        })
      ),
    });
    // 절대 안됩니다.
    // 1. this.state.information.push(data);
    // 2. this.setState({
    //      information: this.state.information,
    //    })
  };

  // 제거기능
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    // this.state.information.push({ ...data, id: this.id++ });
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }),
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneInfoList
          data={this.state.information.filter(
            (info) => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
