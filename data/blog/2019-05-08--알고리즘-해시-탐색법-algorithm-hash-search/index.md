---
title: 알고리즘 | 해시 탐색법 (algorithm | hash search)
createdDate: '2019-05-08'
updatedDate: '2019-06-07'
author: sangza
tags:
  - algorithm
category:
  - blog
draft: false
---

해시 탐색법은 key에 value를 저장하는 데이터 구조인 
[해시 테이블](https://ko.wikipedia.org/wiki/해시_테이블)에
[해시함수](https://ko.wikipedia.org/wiki/해시함수)를 활용하여 
데이터를 저장하고 탐색시 한번에 데이터를 찾아낼 수 있다.
선형 탐색법이나 이진 탐색법 보다 빠르게 탐색할 수 있다.

근본적인 문제가 있는데 서로 다른 값이 해시 함수를 통해 만들어진 index 가 
동일하여 충돌(collision) 하는 경우가 있는데 이런 경우에는 여러 해결 방법이 있는데 
그 중 Open addressing 방식 중에 선형 탐사(Linear Probing) 방법이 있다. 
선형 탐사 방법은 index + 1 을 해나가면서 빈 공간은 찾는 방식이다.
(그 밖의 다른 방법은 따로 정리 할 예정이다)

해시 함수 기법도 다양한데 이번 포스트에서는 division method
을 활용해 보겠다.

division method 는 해시 테이블 크기 m 으로 나눈 나머지 값을 해시 값으로 결정한다.
해시 테이블의 크기는 2의 제곱수와 거리가 먼 소수(prime number)를 주로 활용합니다. 
테이블내의 공간을 효율적으로 활용한다고 합니다.

  - index = value % m

해시 테이블은 충돌에 대한 솔루션과 해시 함수 기법은 한가지가 아닙니다. 관련해서는 이후 포스팅에서 다뤄보도록 하겠습니다.

---

## 자바스크립트 적용  (with javascript)

 - 해시 함수는 division method

### 배열을 이용해서 충돌을 피하는 방법  (with array)

```js
class HashSearchArr {

  constructor(size){
    this.buckets = new Array(size)
    this.size = size
  }

  hash(num){
    return num % this.size
  }

  set(num){
    let index = this.hash(num)

    if(!this.buckets[index]) {
      this.buckets[index] = []
    }

    this.buckets[index].push(num)

    return console.log(index)
  }

  get(num){
    let index = this.hash(num)

    if(!this.buckets[index]) {
      return console.log("not found!")
    }

    for(let bucket of this.buckets[index]){
      if(bucket === num){
        return console.log("found!")
      }
    }
  }
}
```

### open addressing  (with linear Probing)

```js
class HashSearchAddIndex {

  constructor(size){
    this.buckets = new Array(size)
    this.size = size
  }

  hash(num){
    return num % this.size
  }

  isAlready(index, num) {
    let addIndex = index + 1

    while(addIndex <= this.size - 1) {
      if(this.buckets[addIndex] === num) {
        return console.log("existed number!")
      }

      if(!!this.buckets[addIndex]) {
        addIndex++
      } else {
        this.buckets[addIndex] = num
        break
      }
    }
  }

  set(num){
    let index = this.hash(num)

    if(!!this.buckets[index]) {
      return this.isAlready(index, num)
    }

    if(this.buckets[index] === num) {
      return console.log("existed number!")
    }

    this.buckets[index] = num

    return console.log(index)
  }

  isCollision(index, num) {
    let collisionIndex = index
    let isFound = false

    while(collisionIndex <= this.size - 1) {
      if(this.buckets[collisionIndex + 1] !== num) {
        collisionIndex++
      } else {
        isFound = true
        break
      }
    }

    return isFound ? console.log("found!") : console.log("not found!")
  }

  get(num){
    let index = this.hash(num)

    if(this.buckets[index] === num) {
      return console.log("found!")
    } else {
      return this.isCollision(index, num)
    }
  }
}
```
