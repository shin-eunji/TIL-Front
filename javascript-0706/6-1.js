// 실행 컨텍스트의 역할
//전역 변수
const x = 1;
const y = 2;

// 함수 정의
function foo(a) {
  // 지역 변수
  const x = 10;
  const y = 20;
  // 메소드 호출
  console.log(a + x + y); // 130 (100+10+20)
}
// 함수 호출
foo(100);

// 메소드 호출
console.log(x + y); // 3
