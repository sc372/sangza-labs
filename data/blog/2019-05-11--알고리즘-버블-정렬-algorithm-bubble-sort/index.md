---
title: 알고리즘 | 버블 정렬 (algorithm | bubble sort)
createdDate: '2019-05-11'
updatedDate: '2019-06-07'
author: sangza
category: blog
tags:
  - algorithm
  - sort
description: 버블 정렬(bubble sort)이란 무작위로 정렬되어 있는 N개의 배열을 오름차순/내림차순으로 정렬하는 방법 중의 하나이다. 서로 붙어 있는 두 값을 순차적으로 비교해나가면서 마지막 값까지 비교하여 정렬하는 방법이다.
draft: false
---

[버블 정렬](https://ko.wikipedia.org/wiki/거품_정렬) 이란 무작위로 정렬되어 있는
N개의 배열을 오름차순 / 내림차순으로 정렬하는 방법 중의 하나이다.

서로 붙어 있는 두 값을 순차적으로 비교해나가면서 마지막 값까지 비교하여 정렬하는 방법이다.

- 구현은 간단하나 처리속도가 매우 느리다.

---

## 작업 순서

- bubbleSort(arr)을 정의한다.

- for문으로 전체 배열의 갯수로 순회한다.

- for문을 중첩하여 정렬이후 남은 배열의 갯수 - 1 갯수로 순회한다.()

- 인접한 두 수를 비교하여 서로 교환한다.

### 코드 적용

```javascript
const bubbleSort = (arr = []) => {
  if (!arr.length) return console.log('oops')

  for (let i = 0; i < arr.length - 1; i++) {
    let temp

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return console.log(arr)
}

bubbleSort([3, 1, 8, 5, 20, 15])
// [ 1, 3, 5, 8, 15, 20 ]
```

## 참고자료

- [정렬 알고리즘 속도 비교](https://www.toptal.com/developers/sorting-algorithms)
