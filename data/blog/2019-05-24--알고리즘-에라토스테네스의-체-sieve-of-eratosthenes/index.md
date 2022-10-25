---
title: 알고리즘 | 에라토스테네스의 체 (Sieve of Eratosthenes)
createdDate: '2019-05-24'
updatedDate: '2019-06-07'
author: sangza
tags:
  - algorithm
  - prime
  - 소수
category: blog
draft: false
---

[에라토스테네스의 체](https://ko.wikipedia.org/wiki/에라토스테네스의_체) 란 정해진 정수 안에서
소수를 구하는 방식으로 모든 수를 확인하지 않고
2부터 수의 배수들을 모두 제외시켜 가면서 소수를 구하는 방식이다.

- [소수](<https://ko.wikipedia.org/wiki/소수_(수론)>) 란 약수로 1과 자시자신만 가지는 수이다.

  - ex) 3(1,3), 17(1,17), 23(1,23) ...

- [약수](https://ko.wikipedia.org/wiki/약수) 란 어떤 수를 나누었을 때 나머지가 0이 되는 수이다.
  - ex) 24(1,2,3,4,6,8,12,24), 8(1,2,4,8) ...

![에라토스테네스의 체](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)

### 코드 적용 (example code)

```javascript
const sieveOfEratosthenes = (num) => {
  // 입력된 정수의 크기 만큼 ture 배열을 초기화 한다.
  const temp = new Array(num).fill(true)
  // 소수들의 배열을 담기 위한 값을 초기화한다.
  const primeNums = []

  // 첫번째 원소는 0 이므로 false 를 대입한다.
  temp[0] = false

  // 두번째 원소 부터 반복 문을 시작한다.
  for (var i = 2; i <= num; i++) {
    // false 인 인덱스는 소수가 아니므로 걸러준다.
    if (temp[i]) {
      // 인덱스의 배수를 반복문을 통해서 false 를 대입한다.
      for (var j = i * i; j <= num; j += i) {
        temp[j] = false
      }
    }
  }

  // true 인 원소만 인덱스 번호와 바꾸고 primeNums 에 담는다.
  for (let i = 0; i <= num; i++) {
    if (temp[i]) {
      primeNums.push(i)
    }
  }

  return primeNums
}

const getPrimeNums = sieveOfEratosthenes(30)
console.log(getPrimeNums)
// [ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]
```
