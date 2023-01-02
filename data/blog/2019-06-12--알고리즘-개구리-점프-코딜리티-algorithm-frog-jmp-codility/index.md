---
title: 알고리즘 | 개구리 점프 [코딜리티] (algorithm | FrogJmp [codility])
createdDate: '2019-06-12'
updatedDate: '2019-06-12'
author: sangza
category: blog
tags:
  - algorithm
  - codility
description:
draft: false
---

[문제]

- 정수 X, Y, D 세개가 주어진다.
- 개구리는 위치 X 부터 위치 Y 까지 D 의 거리로 점프를 해서 간다.
- 개구리는 몇번의 점프를 하면 D 까지 갈 수 있는가?

예를 들면 **X = 2, Y = 50, D = 5** 결과는 **9** 이다.

[조건]

- 제시되는 정수의 범위는 [1..1,000,000,000]
- X ≤ Y

```javascript
function solution(X, Y, D) {
  if (X === Y) return 0 // 시작지점과 끝지점이 같을 경우 0을 리턴한다.
  if (D >= Y - X) return 1 // 시작지점에서 끝지점의 거리보다 점프의 크기가 크면 1을 리턴한다.

  // 시작지점과 끝지점 사이의 거리에서 점프시 정확히 도착하지 않으면 +1 을 한다.
  return parseInt((Y - X) % D) === 0
    ? parseInt((Y - X) / D)
    : parseInt((Y - X) / D) + 1
}
```
