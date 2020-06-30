## HTML5

HTML은 웹페이지를 기술하기 위한 마크업 언어이다.

HTML5 문서는 반드시 <!DOCTYPE html> 으로 시작하여 문서 형식을 HTML5로 지정한다.

실제적인 HTML documnet는 <html></html> 사이에 기술한다.

<head></head>사이에는 document title, 외부 파일의 참조, 메타데이터의 설정 등이 위치하며 브라우저에 표시되지 않는다.

웹 브라우저에 출력되는 모든 요소는 <body></body>사이에 위치한다.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>안녕하세요! HTML5</p>
  </body>
</html>
```

## HTML5의 기본 문법

#### Element (요소)

> HTML 요소는 시작 태그와 종료 태그 그리고 태그 사이에 위치한 content로 구성된다.

<p>Hello, My name is shin eunji</p>

> 요소는 중첩될 수 있으며 요소 안에 요소를 포함할 수 있다. 이것을 부자관계가 성립된다. 라고 많이 얘기하신다.

```
<div>
  <h1>안녕하세요</h1>
  <p>나의 이름은 신은지 입니다.</p>
</div>


> 빈 요소는 content를 가질 수 없는 요소이며, 어트리뷰트만을 가질 수 있다.
```

- br
- hr
- img
- input
- link
- meta

#### 어트리뷰트 (속성)

요소의 성질, 특징을 정의, 요소는 어트리뷰트를 가질 수 있으며﻿ 어트리뷰트는 요소에 추가적 정보를 제공한다.

```
<img src="html.png">
<input name="value">
```
