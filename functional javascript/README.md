# 함수형 자바스크립트

## 함수형 자바스크립트란?

- 함수형 자바스크립트 라이브러리인 Underscore.js의 each, map, filter, reduce등

```
function addMaker(a) {
    return function(b) {
        return a + b; // a: 10, b: 5
    }
}

addMaker(10)(5); // 15
```

## 함수형 자바스크립트 실용성

절차지향적으로 작성된 코드를 함수형으로 변경하고 리팩터링할 것이다.

```
var user = [
    { id: 1, name: 'KiM', age: 26 },
    { id: 2, name: 'Lee', age: 27 },
    { id: 3, name: 'SONG', age: 28 },
    { id: 4, name: 'PARK', age: 29 },
    { id: 5, name: 'SHIN', age: 230 },
];

var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age < 28) temp_users.push(users[i]);
}
console.log(temp_users.length);

// age
var ages = [];
for (var i = 0; len = temp_users.length; i < len; i++) {
    ages.push(temp_users[i].age);
}
console.log(ages);

//
var temp_users = [];
for (var i = 0; len = users.length; i < len; i++) {
    if (users[i].age >= 28) temp_users.push(users[i]);
}
console.log(temp_users.length);

//
var names = [];
for (var i = 0; len = temp_users.length; i < len; i++) {
    names.push(temp_usrs[i].name);
}
console.log(names);

```

### for에서 filter로, if에서 predicate로

```
// 기존 코드
var temp_users = [];
for (var i = 0, len = users.length; i < len; i++) {
    if (users[i].age < 28) temp_users.push(users[i]);
}
console.log(temp_users.length);
```

```
// 바꾼 코드
function filter(list, predicate) {
    var new_list = [];
    for (var i = 0; i < list.length; i < len; i++) {
        if (predicate(list[i])) new_list.push(list[i]);
    }
    return new_list;
}
```
