# this

자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이다. this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메소드를 참조할 수 있다.
자바스크립트 엔진에 의해 암묵적으로 생성되며 코드 어디에서든지 참조할 수 있다.
함수 호출하면 arguments 객체와 this가 암묵적으로 함수 내부에 전달된다.
this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.

> 동작을 나타내는 메소드는 자신이 속한 객체의 상태, 프로퍼티를 참조하고 변경할 수 있어야 한다.

**바인딩**
**식별자와 값을 연결하는 과정, 변수는 할당에 의해 값이 바인딩된다.**

## 함수 호출 방식과 this 바인딩

this가 가리키는 값. this 바인딩은 함수의 호출 방식, 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.
렉시컬 스포크와 this바인딩은 결정 시기가 다르다. => 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수 정의가 평가되어 함수 객체가 생성되는 시점에 상위 스코프를 결정한다. this에 바인딩될 객체는 함수 호출 시점에 결정된다.

## 함수 호출하는 방식

- 일반 함수 호출
- 메소드 호출
- 생성자 함수 호출
- Function.prototype.apply/call/bind 메소드에 의한 간접 호출

## Global context

함수 밖, 글로벌 실행 컨텍스트에서 this는 글로벌 객체를 가르킵니다(strict mode or not)

```
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```

## Function context

함수 내부에서 this는 함수 호출에 따라 달라집니다. 일반모드에서 함수 내부의 this는 글로벌을 가르키지만, strict mode에서는 undefined이 출력됩니다.

```
// non-strict mode
function f1() {
  return this;
}
// In a browser:
f1() === window; // true
// In Node:
f1() === global; // true
// strict mode
function f2() {
  'use strict'; // see strict mode
  return this;
}
f2() === undefined; // true
```

call, apply 메소드를 사용해서 this 값을 다른 컨텍스트로 전달 할 수 있습니다.

```
var obj = {a: 'Custom'};
var a = 'Global';
function whatsThis(arg) {
  return this.a;
}
whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'

```

call과 apply의 차이점은 두 번째 파라미터에 배열값을 전달 할 수 있는가 없는가 입니다. 첫 번째로 전달되는 this는 객체로, 숫자나 문자열이 전달 되어도 ToObject로 인해 객체로 변환됩니다.
