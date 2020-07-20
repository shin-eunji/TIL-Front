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
