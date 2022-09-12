---
title: "알고리즘 | 바이너리 갭 [코딜리티]  (algorithm  | binary gap [codility])"
createdDate: "2019-06-10"
updatedDate: "2019-06-10"
author: sangza
tags:
  - algorithm
  - codility
category: blog
draft: false
---

알고리즘 트레이닝 사이트인 [코딜리티(codility)](https://app.codility.com/programmers/) 를 시작하였다.
매일 한 문제씩 풀어볼 생각인데.. 아무튼 한 번 해보자.

첫번째 문제는 바이너리 갭(binary gap) 이라는 문제다.

- 10진수 자연수 N 을 2진수로 바꾼다.
- 2진수 값을 보면 1과 0 이 섞여 있다.
- 나열된 2진수 값의 1과 1사이 0의 개수가 가장 많은 갯수를 구한다.
- 0 이 없는 경우에는 0 을 리턴한다.

```javascript
function solution(N) {
  const bin = N.toString(2); // 자연수 10진수를 2진수의 문자열로 바꾼다.
  const arrForBin = bin.split("1"); // 1 사이에 있는 붙어있는 0들의 배열을 만든다.

  let findValue = 0; // 최종 리턴 될 변수를 초기값 0 으로 선언한다.(0 보다 큰 값이 없을 경우 0을 리턴)

  // 가장 마지막 값은 제외하고(가장 마지막 값은 1과 1사이가 될 수 없다.)
  // 반복문을 통해서 가장 긴 0의 값이 있으면 findValue 에 담는다.
  for (let i = 0; i <= arrForBin.length - 2; i++) {
    if (arrForBin[i].length > findValue) {
      findValue = arrForBin[i].length;
    }
  }

  return findValue;
}
```
