---
title: 알고리즘 | 유클리드 호제법 (algorithm | euclidean algorithm)
createdDate: '2019-05-25'
updatedDate: '2019-06-07'
author: sangza
category: blog
tags:
  - algorithm
  - 최대공약수
description: 유클리드 호제법(euclidean algorithm)은 두개의 자연수의 최대 공약수를 구하는 알고리즘이다.
draft: false
---

[유클리드 호제법](https://ko.wikipedia.org/wiki/유클리드_호제법) 은 두개의 자연수의
최대 공약수 를 구하는 알고리즘이다.

- [최대 공약수(GCD: gratest common divisor)](https://ko.wikipedia.org/wiki/최대공약수) 란 두개(혹은 이상) 의 자연수의
  공통된 약수 이다.
- [약수(divisor)](https://ko.wikipedia.org/wiki/약수) 란 어떤 자연수를 나누었을 때
  나누어 떨어지게 하는 자연수이다.

  - 12의 약수: 1, 2, 3, 4, 6, 12
  - 18의 약수: 1, 2, 3, 6, 9, 18
  - 자연수 12 와 자연수 18의 약수: 1, 2, 3, 6
  - 자연수 12 와 자연수 18의 최대 공약수: 6

## 원리

- 두개의 자연수(x = 1071, y = 1029) 가 있다.
- 큰 수(y = 1071) 를 작은 수(x = 1071) 로 나눈 나머지를 r 이라고 하자.(y % x = r)
- 작은 수(x = 1071) 는 큰 수(y = x) 로 대입하고, 나머지(r) 는 작은 수로 대입한다.(x = r)
- 나머지가 0 일 될때가지 반복하고 0 될 때의 작은 수(x)의 값이 최대 공약수가 된다.

```bash
1071 % 1029 = 42
1029 % 42 = 21
42 % 21 = 0
[최대공약수 = 21]
```

### 코드 적용

```javascript
const euclideanAlgorithm = (x, y) => {
  let temp, r

  // 큰값을 x 에 담는다.
  if (x < y) {
    temp = x
    x = y
    y = temp
  }

  // 나머지가 0 이 되기 전까지 반복문을 실행한다.
  while (y !== 0) {
    r = x % y
    x = y
    y = r
  }

  return x
}

// 재귀적 방법
const recEuclideanAlgorithm = (x, y) => {
  if (y === 0) return x
  else return recEuclideanAlgorithm(y, x % y)
}

const getGratestCommonDivisor = euclideanAlgorithm(1029, 1071)
const getGratestCommonDivisorWithRec = recEuclideanAlgorithm(73870, 10383800)

console.log(getGratestCommonDivisor)
// 21
console.log(getGratestCommonDivisorWithRec)
// 10
```
