# 1. Block Scope

## Scope

### 함수 스코프

스코프: 범위, 유효공간, 허용공간
함수에 의해서 생기는 범위

### 블록 스코프

블록에 의해 생기는 유효범위
{}에 의해서 변수의 유효범위가 결정된다.

### 호이스팅 (Hoisting)

{}
문 - if, for, while, switch-case 문 '문단' / 결과를 리턴하지 않는다.
식 - 값이 될 수 있는 경우.
값
데이터는 값, 식, 문 중 하나이다.
값과 식은 동일한 것으로 간주하지만 문은 별도

```
function() {
    if(true) {

    }
    for(let i = 0; i < 10; i++) {

    }

    while(true) {

    }
    switch(a) {
        case: break;
    }
}
```
