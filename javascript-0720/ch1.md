## 기존과 달라진 ES6에서의 리스트 순회

- for i++
- for of

```
// ES5
const list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    console.log(list[i]) // 1, 2, 3
}

// 유사배열
const srt = 'abc'
for (var i = 0; i < list.length; i++) {
    console.log(str[i]) // a, b, c
}
```

```
// ES6
const list = [1, 2, 3];
for (const a of list) {
    console.log(a) // 1, 2, 3
}

const str = 'abc'
for(const a of str) {
    console.log(a) // a, b, c
}
```

### Array를 통해 알아보기

```
console.log('Array') // Array
const arr = [1, 2, 3]
for(const a of arr) console.log(a) // 1, 2, 3

arr // [1, 2, 3]
// 0: 1,
// 1: 2,
// 2: 3
// length: 3,
// __proto__: Array(0)
```

### Set을 통해 알아보기

```
console.log('Set')
const set = new Set([1,2,3]);
for(const a of set) console.log(a)

set // Set(3) {1, 2, 3}
// [[Entries]]
// 0: 1
// 1: 2
// 2: 3
// size: (...)
// __proto__: Set
```

### Map을 통해 알아보기

```
console.log('Map')
const map = new Map([['a', 1], ['b',2], ['c', 3]]);
for(const a of map) console.log(a)

map // map(3) {"a" => 1, "b" => 2, "c" => 3}
// [[Entries]]
// 0: {"a" => 1}
// 1: {"b" => 2}
// 2: {"c" => 3}
// size: (...)
// __proto__: Map
```

### Symbol

- 객체의 키로 사용될 수 있습니다.

```
const arr = [1, 2, 3];
console.log(arr[Symbol.iterator]);
for(const a of arr) console.log(a);
```

## 이터러블/이터레이터 프로토콜

- 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
- 이터레이터: { value, done } 객체를 리턴하는 next() 를 가진 값
- 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

```
cosnt map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const a of map.keys()) console.log(a); // a, b, c
for (const a of map.values()) console.log(a); // 1, 2, 3
for (const a of map.entries()) console.log(a); // ['a', 1], ['b', 2], ['c', 3]
```

- 내장 이터러블: Set, Map, Array 이터러블 이터레이터 for of 동작하여 순회하는지 구현함.

### 사용자 정의 이터러블을 통해 알아보기

- next()

```
const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i == 0 ? {done: true} : { value: i--, done: false };
            }
        }
    }
};

let iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { done: true } value: 0이므로 done: true

for (const a of iterable) console.log(a); // 1, 2, 3
```

## 전개 연산자

```
const a = [1,2]
// a[Symbol.iterator] = null
console.log([...a, ...[3,4]]) // [1, 2, 3, 4]
```
