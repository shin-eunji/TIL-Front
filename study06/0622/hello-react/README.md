# JSX

### JSX의 장점

- 보기 쉽고 익숙하다
- 더욱 높은 활용도

### props

- jsx 내부에서 props 렌더링
  props 값은 컴포넌트 함수의 파라미터로 받아 와서 사용할 수 있습니다.

#### 비구조화 할당 문법(destructuring assignment)

객체에서 값을 추출하는 문법
함수의 파라미터 부분에서도 사용할 수 있으며, 함수의 파라미터가 객체라면 그 값을 바로 비구조화해서 사용하는 것.

#### propTypes를 통한 props 검증

컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때는 propTypes를 사용한다.

### state

컴포넌트 내부에서 바뀔 수 있는 값.
