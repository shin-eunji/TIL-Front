# Symbol

- ECMAScript로 표준화된 자바스크립트로 ES6에 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다.
- 다른 값과 중복되지 않는 유일무이한 값이며, 주로 이름의 충돌 위험이 없는 유일한 프로퍼티 키를 만들기 위해 사용한다.

## Symbol 생성

### Symbol 함수

- Symbol 함수를 호출하여 생성한다. 다른 원시값, 즉 문자열, 숫자, 불리언, undefined, null 타입의 값은 리터럴
- 표기법을 통해 값을 생성할 수 있지만 심볼 값은 Symbol 함수를 호출하여 생성해야 한다.

**Symbol함수는 String, Number, Boolean 생성자 함수와는 달리 new 연산자를 사용하지 않는다.**

```
new Symbol(); // TypeError
```

- description 프로퍼티와 toString 메소드는 Symbol.prototype의 프로퍼티이다.
- Symbol 값은 문자열이나 숫자 타입으로 변환되지 않지만, 불리언 타입으로 변환된다.

```
const mySymbol = Symbol();
console.log(!!mySymbol); // true
```

### Symbol.for 메소드

인수로 전달받은 문자열을 키로 사용하여 키와 심볼 값의 쌍들이 저장되어 있는 전역 심볼 레지스트리에서 해당 키와 일치하는 심볼 값을 검색한다.

```
const s1 = Symbol.for('mySymbol');
const s2 = Symbol.for('mySymbol');

console.log(s1 === s2); // true
```

## Symbol과 상수

```
const DIRECTION = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
};

const myDirection = Direction.UP;

if (myDirection === Direction.UP) {
    console.log('UP');
}
```

> enum

- 명명된 숫자 상수의 집합으로 열거형이며 자바스크립트의 Superset(상위 확장)인 TypeScript에서 enum을 지원하고 있다.

## Symbol과 프로퍼티 키

심볼 값은 유일무이한 값이므로 심볼 값으로 프로퍼티 키를 만들면 다른 프로퍼티 키와 절대 출동하지 않는다.
