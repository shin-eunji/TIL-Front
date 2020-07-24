# 제너레이터/이터레이터

- 제너레이터: 이터레이터이자 이터러블을 생성하는 함수

```
function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 100;
}
let iter = gen();
console.log(iter[Symbol.iterator]() == iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (const a of gen()) console.log(a);

```

# odds

```
function *odds() {
    yield 1;
    yield 3;
    yield 5;
    yield 7;
}

let iter2 odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
```

```
// for 문
function *odds(l) {
    for (let i = 0; i < l; i++) {
        if(i % 2) yield i;
    }
}

let iter2 = odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
```
