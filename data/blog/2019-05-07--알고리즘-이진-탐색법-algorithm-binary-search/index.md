---
title: 알고리즘 | 이진 탐색법 (algorithm | binary search)
createdDate: '2019-05-07'
updatedDate: '2019-06-07'
author: sangza
tags:
  - algorithm
category:
  - blog
draft: false
---

[이진 탐색법](https://ko.wikipedia.org/wiki/이진_검색_알고리즘)이란
N개의 원소로 이루어진 배열에서 원소를 찾는 방식 중에서 범위를 절반으로 줄여가면서 찾는 방식이다.

[선형 탐색법](https://ko.wikipedia.org/wiki/순차_검색_알고리즘)
(순차적 탐색법) 보다 비교적 빠르게 찾을 수 있는 장점이 있습니다.
배열의 길이가 길 경우에는 선형 탐색법은 효과적이지 못합니다.

  - 이진 탐색법의 조건은 배열이 내림차순 혹은 오름차순으로 되어 있어야 유효합니다.

---

## 재귀적 방법  (recursive approach)

  - recFn(arr, x, start, end) 함수를 정의합니다.

  - 배열의 중간 지점의 값을 구합니다

  - 배열의 중간 지점의 값과 찾고자 하는 값(x)이 일치할 경우 true 를 반환합니다.

  - 배열의 중간 지점의 값이 찾고자 하는 값(x)보다 클 경우 중간지점의 index - 1 
  을 end 인자로 recFn() 함수를 재호출합니다.

  - 배열의 중간 지점의 값이 찾고자 하는 값(x)보다 작을 경우 중간지점의 index + 1 
  을 start 인자로 recFn() 함수를 재호출합니다.

### 코드 적용  (recursive approach with code)

```js
const recFn = (arr, x, start, end) => {
  if (start > end) return false

  // find value by middle point
  const mid = Math.floor((start + end) / 2)

  // compare find value with x
  if (arr[mid] === x) return true

  // if find value is greater then x, recFn excute
  if (arr[mid] > x) return recFn(arr, x, start, mid - 1)
  // else find value is smaller then x, recFn excute
  else return recFn(arr, x, mid + 1, end)
}

// array set(sort by asc or desc)
const arr = [1, 2, 3, 5, 6, 7, 8, 10, 12]

const input = x => {
  if (recFn(arr, x, 0, arr.length - 1)) return console.log('found!')
  else return console.log('not found!')
}

input(5)
```

---

## 반복하는 방법  (iterative approach)

  - iterFn(arr, x, start, end) 함수를 정의합니다.

  - while 문을 통해서 배열 시작지점부터 마지막 인덱스 를 순위합니다.

  - while 문 내부에서 배열의 중간 지점의 값과 찾고자 하는 값(x)이 일치할 경우, 
  true 를 반환합니다.  

  - while 문 내부에서 배열의 중간 지점의 값과 찾고자 하는 값(x)이 일치하지 않고, 
  배열의 중간 지점의 값이 찾고자 하는 값(x)보다 클 경우 
  중간 지점의 index - 1 을 end 값에 대입하고 다시 순회 합니다.  

  - while 문 내부에서 배열의 중간 지점의 값과 찾고자 하는 값(x)이 일치하지 않고, 
  배열의 중간 지점의 값이 찾고자 하는 값(x)보다 작을 경우 
  중간 지점의 index + 1 을 start 값에 대입하고 다시 순회 합니다.

### 코드 적용  (iterative approach with code)

```js
const iterFn = (arr, x, start, end) => {
  if (start > end) return false

  // iterate while start index ~ end index
  while (start <= end) {
    // find value by middle point
    let mid = Math.floor((start + end) / 2)

    // compare find value with x
    if (arr[mid] === x) return true
    // find value is smaller then x,
    else if (arr[mid] < x) start = mid + 1
    // find value is greater then x,
    else end = mid - 1
  }

  // nothing
  return false
}

// array set(sort by asc or desc)
const arr = [1, 2, 3, 5, 6, 7, 8, 10, 12]

const input = x => {
  if (iterFn(arr, x, 0, arr.length - 1)) return console.log('found!')
  else return console.log('not found!')
}

input(5)
```
