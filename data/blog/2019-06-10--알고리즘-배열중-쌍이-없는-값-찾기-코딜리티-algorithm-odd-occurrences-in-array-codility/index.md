---
title: 알고리즘 | 배열 중 쌍이 없는 값 찾기 [코딜리티] (algorithm | OddOccurrencesInArray [codility])
createdDate: "2019-06-10"
updatedDate: "2019-06-10"
author: sangza
tags:
  - algorithm
  - codility
category:
  - blog

draft: false

---

N개로 구성된 홀수개의 배열 A 에서 단 하나의 수를 제외한 모든 수는 쌍이 있는 수이다.
쌍이 없는 단 하나의 수를 찾는 문제이다.
    
예) A[] = [9,3,9,3,9,7,9]  
  
A[0] = 9  A[1] = 3  A[2] = 9  
A[3] = 3  A[4] = 9  A[5] = 7  
A[6] = 9
  
답은 7 이다.

```javascript
function solution(A) {
  if (A.length <= 1) return A[0]  // 하나의 배열이면 해당 값이 정답이다.
    
  let B = A.sort((a, b) => b - a)  // 주어진 배열을 정렬한다.
    
  // 짝수의 인덱스 값만 반복문을 통해 확인한다.  
  for (let i = 0; i <= B.length; i+=2) {
    if (B[i] !== B[i + 1]) {  // 짝수의 인덱스값과 인덱스 + 1 의 값이 같으면
      return B[i]  // 해당 값이 정답이다.
    }
  }
    
  return B[B.length - 1]  // 마지막 값이 될때까지 정답을 찾지 못하면 마지막 값이 정답이다.  
}
```
