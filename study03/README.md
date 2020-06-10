자식 컴포넌트가 부모한테 값을 전달하기
handleCreate 메소드를 만들어서 onCreate={this.handleCreate}로 전달한다.

key가 없다면?
['a','b','c','d'] b와 c사이의 z가 추가된다면
['a','b','z',c','d']

['a','b','z',c','d'] a가 사라지면
['b','z',c','d']

key가 있다면

<div key={0}>a</div>
<div key={1}>b</div>
<div key={2}>c</div>
<div key={3}>d</div>

[
{ id: 0, text: 'a' },
{ id: 1, text: 'b' },
{ id: 2, text: 'c' },
{ id: 3, text: 'd' },
]

<div key={0}>a</div>
<div key={1}>b</div>
<div key={5}>z</div>
<div key={2}>c</div>
<div key={3}>d</div>

[
{ id: 0, text: 'a' },
{ id: 1, text: 'b' },
{ id: 5, text: 'z' },
{ id: 2, text: 'c' },
{ id: 3, text: 'd' },
]

#### 데이터 제거

.slice .filter

#### 불변성을 왜 유지하는가? 컴포넌트 업데이트 성능 최적화

#### DOM에 접근 - ref

포커스 맞추기

#### 앞으로 뭘, 어떻게 공부할까?

- prettier
- 리액트 컴포넌트 스타일링 (SASS, SCSS, styled-components)
- immutable.js 라이브러리
- immer.js 라이브러리
- Redux - 데이터 관리할 때, 컴포넌트 구조를 정리하고 체계적으로 작성할 수 있는 라이브러리
- mobx
- 리액트 라우터 (Router)
- TypeScript
