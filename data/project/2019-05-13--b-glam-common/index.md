---
title: bGlam | common
createdDate: '2019-05-13'
updatedDate: '2019-05-13'
author: sangza
category: project
project: bGlam

draft: false
---

## 프로젝트 기간 (project period)

- 2018.02 ~

## 개요 (introduce)

여러개의 nodejs(express) 서버에서 공통적으로 사용하는 코드들이 많아짐에 따라서
별도로 분리하여 관리해 나가기 위해 구성한 패키지

## 주요 특징 (core feature)

공통적으로 이용해야 하는 목적으로 순수한 함수형으로 코드 작성
(순수 함수 유지 => 동일한 인자로 함수 호출시 동일한 리턴 값 보장)

## 핵심 기능 (core modules)

- error middleware : boom 라이브러리를 통해서, 에러 코드에 따른 에러 처리
  - 요청 에러 400번대와, 서버에러 500번대의 경우 에러 테이블에 저장하여 에러 분석에 사용하였다.

```javascript
switch (err.typeof) {
      // 4xx Errors
      case Err.badRequest:
        // 400 Bad Request
        break;
      case Err.unauthorized:
        // 401 Unauthorized
        break;
      case Err.paymentRequired:
        // 402 Payment Required
        break;
      ...
}
```

![img](https://i.postimg.cc/G2XkM1W0/image.png)

- notification : mail, push(mobile), sms 등 처리에 대한 템플릿과 로직을 구성
  - 실시간 예약 여부 확인을 위해, 업체용 앱과 고객과의 notification 을 다음과 같이 설계하였다.

![img](https://i.postimg.cc/L6xdFyPm/image.png)

- libs : 전반적으로 활용될 작은 util 함수들 모음(format 변환, 토큰 생성 등)
- services : orm(bookshelf.js)을 통한 데이터 베이스 트랜젝션(CRUD) 수행을 위한 공통 함수들 모음
- zinrelo : zinrelo 포인트 시스템 서비스를 이용하기 위한 api 요청 함수들 모음
- file : file(static resourc) 들을 변환하고 저장하기위한 함수들 모음

  - multipart형식으로 데이터를 받아, AWS S3에 저장하는 방식으로 구현하였다.
  - 이미지의 경우, 썸네일/웹/앱용으로 여러장 저장해야하기 때문에 imagemagic 라이브러리를 사용하여,
    resize 후 최적의 압축률을 실험해서 저장하였다.
  - 이미지 압축률 개선 후 29% 만큼의 성능 개선이 있었다 (Google Audit Performance)

- global_method: 전역에서 사용할 변수들을 세팅하는 함수
- i18n : 국제화 작업을 위한 함수들 모음(미구현)
- refund : 결제 취소 처리에 대한 함수(iamport 활용)

## 적절한 공통화 (how to commonization)

1. 도입 : common 모듈의 시작

바뀌는 코드들은 많은데, 프로젝트마다 다 나누어져 있어서 동일한 작업을 매번 반복해주어야 했고,
이 과정에서 누락되는 실수들이 자주 발견되었다. 그래서 `common` 모듈의 필요성이 대두되었다.
각 프로젝트에서는 common 모듈을 소프트링크를 통해 공유해서 사용하였다.

2. 초반 : ORM에 필요한 database model / services 파일들의 공유

초반의 common은, ORM에 필요한 database model 들과, services들이 모두 들어가 있었다.
그래서 ORM을 사용하는 모든 백엔드에서 해당 코드들을 공유하였다.
그러나 앱서비스를 시작함과 동시에 배포시점이 달라졌고, 코드 하나를 수정하면
다른 모든 프로젝트에도 영향이 가기 시작하면서 안정성 문제가 대두되었다.

3. 중반 : git Submodule의 사용

model들과 services들은 변동이 크지 않은 데이터베이스에 의존하는 내용들이고
따라서 공통화 시키되 프로젝트마다 다른버전의 common 파일을 가질 수 있도록
`git submodule`을 사용해보고자 하였다. 그러나 git submodule에 대한 학습이 필요했으며,
여러버전의 common 모듈이 생겨남으로써, 빌드 배포 프로세스가 지나치게 복잡해진다는 의견이 있었다.

4. 현재 : ORM에 필요한 database model / services 파일들의 제거

개발이 후반부가 되면서 테이블이 빈번하게 수정될일이 줄어들었고,
submodule 때문에 빌드 배포 프로세스가 복잡하게 되는 것 보다,
models과 services를 프로젝트마다 별도로 갖고 있는 것이 더 이득이 되지 않겠냐는 의견이 나왔다.
그래서 현재와 같이 database 영역이 제거 되고, 유틸함수/미들웨어들만을 공유하는 구조가 되었다.

## 향후 발전 방향 (improvement)

- 함수형 기법을 적극 활용하여 순수하고 안전한 코드 작성
- 테스트 프레임워크를 적용하여 테스트 주도적으로 코드 작성
- 에러 리포팅 기능 자동화
