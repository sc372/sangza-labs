---
title: 알고리즘 | 배열 회전 [코딜리티] (algorithm | CyclicRotation [codility])
createdDate: '2019-06-11'
updatedDate: '2019-06-11'
author: sangza
category: blog
tags:
  - algorithm
  - codility
description:
draft: false
---

- N개의 정수들이 들어있는 배열 A가 주어진다.
- 정수 K 만큼 배열 A 의 원소들을 오른쪽으로 한 칸씩 이동 시킨다.
- 배열의 가장 마지막 원소는 배열의 가장 처음으로 위치 시킨다.

예를 들면 다음과 같이 배열 A 와 정수 K 가 주어졌을 때
**A = [4,7,33,2,8,6] , K = 3**
결과는 **[2,8,6,1,7,33]** 이다.

(처리속도 보다는 처리의 정확도에 집중한다.)

```javascript
function solution(A, K) {
  // 배열 A의 개수와 K 의 수가 같거나 K 가 0 일 경우에는 배열 A 를 그대로 리턴한다.
  if (A.length === K || K === 0) return A

  // K 가 배열 A 의 개수보다 큰 수 일 경우가 있어서 K 를 A 의 개수로 나눈 나머지를 k 에 담는다.
  let k = K % A.length

  // 배열 A의 뒤에서 부터 k 만큼의 원소를 잘라내고 T 에 담는다.
  const T = A.splice(0, A.length - k)

  // 배열 A의 뒤에서 부터 k 만큼의 원소를 H 에 담는다.
  const H = A.splice(A.length - k, A.length)

  // 각 T, H 를 위치에 맞게 배열을 만들고 리턴한다.
  return [...H, ...T]
}
```
