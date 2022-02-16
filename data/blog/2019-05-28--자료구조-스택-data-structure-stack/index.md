---
title: 자료구조 | 스택 (data structure  | stack)
createdDate: '2019-05-28'
updatedDate: '2019-10-09'
author: sangza
tags:
  - datastructure
  - stack
  - ADT
category:
  - blog
draft: false
---

[스택](https://ko.wikipedia.org/wiki/스택) 이란 [자료구조](https://ko.wikipedia.org/wiki/자료_구조)의
한 종류로서 [추상 자료형(ADT | abstract data type)](https://ko.wikipedia.org/wiki/추상_자료형) 에
속하는 나열 구조이다.

스택은 일시적으로 데이터를 저장하기 위한 하나의 방법으로 가장 나중에 들어온 데이터를
가장 먼저 빼내는 후입 선출(LIFO | last in first out) 의 순서로 작동한다.

![stack](https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/300px-Data_stack.svg.png)

### 코드 적용  (example code)

```javascript
const Stack = (()=>{

  // WeakMap 으로 map 자료구조를 생성합니다. 이유는 WeakMap은 약한 참조를 하기 때문에
  // key로 사용된 객체가 null이 되어 더이상 사용하지 않게 되면 없어지기 때문에
  // 별도로 메모리 관리를 하지 않아도 되는 장점이 있습니다.
  // 해당하는 내용에 대한 자료는 맨 아래 [참고 자료] 에 링크를 해두었습니다.
  let map = new WeakMap()
  let arr = []

  class Stack {
    constructor(...items){
      // map 자료구조에 빈 배열을 set 한다.
      map.set(this, [])
      // map 자료 구조에 있는 객체(빈 배열)를 arr 변수에 대입 한다.
      arr = map.get(this)

      // 생성자를 통해서 받아온 값이 있다면 값을 넣어 준다.
      if(items.length>0)
        items.forEach(item => arr.push(item))

    }

    push(...items){
      // 스택에 인자로 받아온 데이터를 입력한다.
      items.forEach(item => arr.push(item) )
      return this
    }

    pop(count = 0){
      if (typeof count !== 'number')
        return console.log('숫자를 입력해주세요.')

      // 가장 마지막에 있는 데이터를 하나 뺀다.
      if(count === 0)
        arr.pop()
        // 인자가 있는 경우 배열의 가장 마지막부터 인자(숫자) 만큼 데이터를 뺀다.
      else
        arr.splice( -count, count )
      return this
    }

    peek(){
      // 현재 스택의 가장 마자막에 있는 데이터를 확인한다.
      return arr[arr.length-1]
    }

    size(){
      // 현재 스택의 길이를 확인한다.
      return arr.length
    }

    isEmpty(){
      // 현재 스택이 비어 있는지 확인핟.
      return arr.length==0
    }

    toArray(){
      // 현재 배열의 상태를 확인한다.
      return arr
    }
  }


return Stack

})()

```

## 참고자료  (Resources)

  - [WeakMap을 사용하는 이유](https://github.com/Functional-JavaScript/blog/wiki/ES6-WeakMap%EA%B3%BC-memoize)
