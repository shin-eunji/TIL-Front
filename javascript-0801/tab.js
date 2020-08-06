let wrap = document.getElementById("wrap");
let nav = document.getElementsByTagName("nav")[0];
let nav_li = document.getElementsByTagName("li");

window.onload = function () {
  let len = nav_li.length;

  for (let i = 0; i < len; i++) {
    (function (index) {
      nav_li[index].onclick = function () {
        wrap.className = "box" + index;

        for (let k = 0; k < len; k++) {
          nav_li[k].className = "";
        }
        nav_li[index].className = "on";
      };
    })(i);
  }
};

/*
 hoisting :
 원래 블록안에서 선언된 변수는 지역변수여서 변수의 유효범위(scope)는 해당 블록안에서만 동작하는게 정상이나
 일반 함수가 아닌 반복문이나 조건문같은 블록안에서의 지역변수는 강제로 최상위 루트인 window객체까지 끌려올라가져서 전역화된다.

 이런문제를 해결하기 위해서는 
 es6에서는 새로운 변수선언법 2개가 추가
 let : 호이스팅을 막아주는 변수 선언법 (기존 var --> let)
 const : 해당변수로 선언된 값은 추후 값을 덮어쓰기가 불가능

 hoisting 해결방법
 1.es6 기존 var를 let으로 대체하면 hoisting 이슈해결
 2.즉시실행함수로 호이스팅으로 빠져나가지 못하게 캡슐화

 즉시실행 함수 
 :함수를 선언함과 동시에 자기자신을 호출하는 함수
 (함수정의부)(함수호출부);

 (function($){
    
 })(jQuery);

 --함수코드안쪽에있는 특정한값들을 한번에 변경할떄
 --즉시실행함수 안쪽에 있는 코드들을 캡슐화 (호이스팅 방지)
*/
