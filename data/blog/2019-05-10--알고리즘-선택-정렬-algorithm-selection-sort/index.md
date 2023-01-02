---
title: 알고리즘 | 선택 정렬 (algorithm | selection sort)
createdDate: '2019-05-10'
updatedDate: '2019-06-07'
author: sangza
category: blog
tags:
  - algorithm
  - sort
description: 선택 정렬(selection sort)이란 무작위로 정렬되어 있는 N개의 배열을 오름차순/내림차순으로 정렬하는 방법중의 하나로 제자리 정렬 알고리즘 중 하나이다. 오름차순을 기준으로 무작위로 정렬되어 있는 배열에서 가장 최소값을 찾고 찾은 값을 가장 첫번째 인덱스의 값과 교환한다.
draft: false
---

[선택 정렬](https://ko.wikipedia.org/wiki/선택_정렬) 이란 무작위로 정렬되어 있는
N개의 배열을 오름차순 / 내림차순으로 정렬하는 방법 중의 하나로
[제자리 정렬](https://ko.wikipedia.org/wiki/정렬_알고리즘#제자리_정렬)
알고리즘 중 하나이다.

오름차순을 기준으로 무작위로 정렬되어 있는 배열에서 가장 최소값을 찾고
찾은 값을 가장 첫번째 인덱스의 값과 교환한다.

이후 가장 첫번째 값을 제외한 리스트 중 또 가장 작을 값을 찾고 두번째 인덱스의 값과 교환한다.

이러한 작업을 리스트가 끝나는 인덱스 - 1 까지 반복한다.(가장 마지막 값은 자동으로 가장 큰 값이 됨)

- [버블 정렬](https://ko.wikipedia.org/wiki/거품_정렬) 보다는 빠르다.
- 버블 정렬과 더불어 간단하지만 처리속도가 느린 정렬에 속한다.

---

## 작업 순서

- selectionSort(arr)을 정의한다.

- 배열의 가장 작은 값을 찾는다 (같은 값이 있는 경우 처리 필요)

- 배열의 가장 첫번째 인덱스의 값과 바꾼다.

- 첫번째 인덱스의 값을 제외한 배열을 가지고 마지막 인덱스 - 1 까지 반복한다.

### 코드 적용

```javascript
const selectionSort = (arr = []) => {
  if (!arr.length) return console.log('oops!')

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    let temp

    // 첫번째 인덱스를 제외한 배열을 for 문으로 순회함
    for (let j = i + 1; j < arr.length; j++) {
      // 첫번째 인덱스 보다 작은 값이 나오면 해당 인덱스를 min 에 대입함
      if (arr[min] > arr[j]) {
        min = j
      }
    }

    // 가장 작은 값의 인덱스(min)의 값을 temp 에 담아둠
    temp = arr[min]
    // 첫번째 인덱스의 값을 가장 작은 값의 인덱스에 대입함
    arr[min] = arr[i]
    // 첫번째 인덱스에 가장 작은 값을 담아둔 temp 를 대입함
    arr[i] = temp
  }

  return arr
}

console.log(selectionSort([5, 3, 6, 1]))
// [ 1, 3, 5, 6 ]
```

## 참고자료

- [정렬 알고리즘 속도 비교](https://www.toptal.com/developers/sorting-algorithms)
