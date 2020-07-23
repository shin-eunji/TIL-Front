# 이터러블

## 이터레이션 프로토콜

이터레이션 프로포콜은 순회 가능한 데이터 컬렉션(자료구조)을 만들기 위해 ECMAScript 사양에 정의하여 미리 약속한 규칙이다.

- ES6 이전: 순회 가능한 데이터 컬렉션인 배열, 유사 배열 객체, 문자열 등은 통일된 규약없이 for문, for...in문, forEach등 다양한 방법으로 순회할 수 있었다.
- ES6: 배열, 유사 배열 객체, 문자열 등 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 for...of문, 스프레드 문법, 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화하였다.
- 이터레이션 프로토콜에는 이터러블 프로토콜과 이터레이터 프로토콜이 있다.

```
// 순회 가능한 자료 구조
[Symbol.iterator]()

// iterator 이터러블의 요소를 탐색하기 위한 포인터
{
    next() {
        return {
            value: any,
            done: boolean
        }
    }
}
```

### 이터러블 (iterable)

- 이터러블 프로토콜을 준수한 객체를 이터러블
- Symbol.iterator을 프로퍼티 키로 사용한 메소드를 직접 구현하거나 프로토타입 체인에 의해 상속한 객체
- Array.prototype의 Symbol.iterator 메소드를 상속받는 이터러블

```
const array = [1, 2, 3];

console.log(Symbol.iterator in array); // true Symbol.iterator  메소드를 상속받는 이터러블이다.

for (const item of array) {
    console.log(item);
}

console.log([...array]); // [1, 2, 3]

const [a, ...rest] = array;
console.log(a, rest); //
```

```
const obj = { a: 1, b: 2 };

console.log(Symbol.iterator in obj); // false

for(const item of obj) {
    console.log(item); // TypeError: obj is not iterable
}
```

> 2019년 11월 Stage 4 제안인 스프레드 프로퍼티 제안은 일반 객체에 스프레드 문법의 사용을 허용한다.
> 하지만 일반 객체도 이터러블 프로토콜을 준수하도록 구현하면 이터러블이 된다.

```
const obj = { a: 1, b: 2 };

console.log({ ...obj }); // { a: 1, b: 2 }
```

### 이터레이터 (iterator)

- 이터러블의 Symbol.iterator 메소드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.
- 이터러블의 Symbol.iterator 메소드가 반환한 이터레이터는 next 메소드를 갖는다.

```
const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();
console.log('next' in iterator); // true
```

- next 메소드는 이터러블의 각 요소를 순회하기 위한 포인터의 역할
- next 메소드를 호출하면 이터러블을 순차적으로 한 단계씩 순회하며 순회 결과를 나타내는 이터레이터 리절트 객체를 반환한다. (iterator result object)

```
const array = [1, 2, 3];

const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 1 , done: false }
console.log(iterator.next()); // { value: 2 , done: false }
console.log(iterator.next()); // { value: 3 , done: false }
console.log(iterator.next()); // { value: undefined , done: true }
```

## 빌트인 이터러블

이터레이션 프로토콜을 준수한 객체인 빌트인 이터러블을 제공한다.

- Array.prototype[Symbol.iterator]
- String.prototype[Symbol.iterator]
- Map.prototype[Symbol.iterator]
- Set.prototype[Symbol.iterator]
- TypedArray.prototype[Symbol.iterator]
- arguments[Symbol.iterator]
- DOM: NodeList.prototype[Symbol.iterator] / HTMLCollection.prototype[Symbol.iterator]

## for...of 문

```
// for (변수 선언문 of 이터러블) {...}
for (const item of [1, 2, 3]) {
    console.log(item); // 1 2 3
}

```
