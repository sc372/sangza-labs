---
title: 알고리즘 | 퀵 정렬 (algorithm | quick sort)
createdDate: '2019-05-23'
updatedDate: '2019-06-07'
author: sangza
tags:
  - algorithm
  - sort
category: blog
draft: false
---

[퀵 정렬](https://ko.wikipedia.org/wiki/퀵_정렬) 이란 무작위로 정렬되어 있는
N개의 배열을 오름차순 / 내림차순으로 정렬하는 방법 중의 하나이다.

- 알고리즘은 비교적 복잡한 수준이지만 sort 알고리즘 중에 가장 빠른 속도이다.

- [분할 정복 알고리즘](https://ko.wikipedia.org/wiki/분할_정복_알고리즘) 을 활용한 정렬 기법이다.

## 작업 순서

- (오름차순 경우) 임의의 원소(pivot)를 정한다.

- pivot 을 기준으로 작은 수는 왼쪽으로, 큰 수는 오른쪽으로 서로 맞교환을 한다.

- pivot 을 기준으로 나뉜 두 배열 각각 이 행위를 재귀적으로 반복한다.

### 코드 적용

```javascript
const swap = (leftIndex, rightIndex, arr) => {
  let temp = arr[leftIndex]
  arr[leftIndex] = arr[rightIndex]
  arr[rightIndex] = temp
}
const partition = (left, right, arr) => {
  let pivot = arr[Math.floor((right + left) / 2)] // 배열의 중간 위치의 원소를 pivot 으로 정한다.
  let i = left // 외쪽 끝 지점
  let j = right // 오른쪽 끝 지점
  while (i <= j) {
    while (arr[i] < pivot) {
      i++ // pivot 값보다 큰 값을 만날때까지 index 를 확인한다.(오름 순서로)
    }
    while (arr[j] > pivot) {
      j-- // pivot 값보다 작은 값을 만날때까지 index 를 확인한다.(내림 순서로)
    }
    if (i <= j) {
      swap(i, j, arr) // pivot 원소를 중심으로 큰 값은 오른쪽으로, 작은 값은 왼쪽으로 서로 맞바꾼다.
      i++
      j--
    }
  }
  return i // pivot 보다 큰 값을 만난 index를 리턴한다.
}

const quickSort = (left, right, arr) => {
  let index
  if (arr.length > 1) {
    index = partition(left, right, arr) // partition 함수를 통해 pivot 보다 큰 값의 index 를 담는다.
    if (left < index - 1) {
      // pivot 의 왼쪽 배열을 같은 방식으로 반복한다.
      quickSort(left, index - 1, arr)
    }
    if (index < right) {
      // pivot 의 오른쪽 배열을 같은 방식으로 반복한다.
      quickSort(index, right, arr)
    }
  }
  return arr
}

const arr = [10, 8, 7, 16, 12, 5, 3, 2, 23, 1, 4]

const asdf = quickSort(0, arr.length - 1, arr)
console.log(asdf)
// [ 1, 2, 3, 4, 5, 7, 8, 10, 12, 16, 23 ]
```

## 참고자료

- [정렬 알고리즘 속도 비교](https://www.toptal.com/developers/sorting-algorithms)
