# LifeCycle API 생명주기

- 나타날때
- 업데이트 될 때
- 사라질때

[LifeCycle 생명주기](https://twitter.com/dan_abramov/status/981712092611989509)

컴포넌트 초기 생성

constructor

```
// 컴포넌트 생성자 함수. 컴포넌트가 새로 만들어질 때마다 이 함수가 호출됩니다.
constructor(props) {
    super(props);
}
```

componentWillMount 는 리액트 v16.3에서 해당 API가 사라졌습니다. (UNSAFE_componentWillMount)

componentDidMount(): 컴포넌트가 화면에 나타나게 됐을 때 호출 (외부 라이브러리 연동, 데이터 요청할 때)

```
componentDidMount() {
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM에 관련된 작업: 스크롤 설정, 크기 읽어오기
}
```

componentWillReceiveProps 는 리액트 v16.3에서 해당 API가 사라졌습니다.

[new] static getDerivedStateFromProps()

[new] getSnapshopBeforeUpdate()
컴포넌트가 업데이트 되서 DOM에 반영되기 직전
DOM상태를 return해서 리턴된 값을 컴포넌트 업데이트 값을 가져올 수 있습니다.

- render()
- getSnapshopBeforeUpdate()
- 실제 DOM 에 변화 발생
- componentDidUpdate

컴포넌트 제거
componentWillUnmount()

컴포넌트 에러 발생
componentDidCatch(error, info) {
this.setState({
error: true
})
}
