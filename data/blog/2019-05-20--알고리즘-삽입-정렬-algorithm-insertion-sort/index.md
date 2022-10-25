---
title: 알고리즘 | 삽입 정렬 (algorithm | insertion sort)
createdDate: '2019-05-20'
updatedDate: '2019-06-07'
author: sangza
tags:
  - algorithm
  - sort
category: blog
draft: false
---

[삽입 정렬](https://ko.wikipedia.org/wiki/삽입_정렬) 이란 무작위로 정렬되어 있는
N개의 배열을 오름차순 / 내림차순으로 정렬하는 방법 중의 하나다.

배열의 각 원소들을 원소 자신 앞에 위치한 원소들과 비교하여 자신의 위치를 찾아서 삽입되면서 정렬된다.

첫번째 원소를 제외하고 두번째 원소부터 앞의 원소들과 비교하면서 시작된다.

- 구현은 간단하나 처리속도가 느린편이다.
- 배열의 상황이 대체로 원하는 상황으로 정렬이 되어 있는 경우에는 효율적이다.

---

## 작업 순서 (work procedure)

- N개의 배열중 두번째 원소를 첫번째 원소와 비교한다.

- 비교후 더 작으면(오름차순의 경우) 그 위치에 원소를 삽입하고 기존의 원소들은 한단게씩 이동한다.

- 배열의 그 다음 원소도 같은 방법으로 마지막 원소까지 프로세스가 진행된다.

### 코드 적용 (example code)

```javascript
const insertionSort = (arr = []) => {
  if (!arr.length) return console.log('oops!')

  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j

    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = temp
  }

  return console.log(arr)
}

insertionSort([3, 1, 8, 5, 20, 15])
// [ 1, 3, 5, 8, 15, 20 ]
```

## 참고자료 (Resources)

- [정렬 알고리즘 속도 비교](https://www.toptal.com/developers/sorting-algorithms)
