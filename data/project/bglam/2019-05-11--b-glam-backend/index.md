---
title: bGlam | backend
createdDate: '2019-05-11'
updatedDate: '2019-05-11'
author: sangza
category: project
project: bglam

draft: false
---

## 프로젝트 기간 (project period)

- version 2.0 : 2018.01 ~

## 요구사항

- 적은 인적 자원으로 많은 기술적 요구와 효율을 충족 시켜야 함
- 애자일 방법으로 빠른 개발/배포가 이루어져야하며, 급격하게 변화하는 비지니스 전략에 대응이 기민해야함
- 새로운 직원을 고용할 경우 빠르게 학습이 가능 해야 함
- 사용자 행동에 대한 되도록 많은 데이터의 축적을 필요로 함
- open API 및 상용 SDK 활용이 용이해야 함
- 결제및 개인 정보등 데이터 무결성 및 안정성이 확보되어야 함
- 웹 기술을 기반으로 하는 HTTP 프로토콜에 대해서 탁월히 대응해야 함
- 에러에 대한 역 추적이 가능해야 함
- aws 클라우드와의 궁합이 좋아야함
- 회원 가입, 로그인 및 인증 시스템에 대한 최소한의 보안은 지켜져야 함
- 카카오 로그인 가능해야 함
- API 문서가 필요함
- 빠른 검색기능이 필요함
- 사용자 포인트 기능
- 채팅 기능

## 기술 스택

- Node.js Express

  - 백엔드, 프론트엔드 작업이 가능하기 때문에 javascript를 활용한 nodejs 를 선택하였고,
    nodejs 환경에서 웹 환경 및 HTTP 프로토콜 에 적절히 대응, 안정성이 증명된 express 웹 프레임워크 활용하기로 하였다.

- REST API 지향

  - 리소스 설계에 적절한 REST API 활용한다.

- JWT Token

  - stateless 인증 방식으로, 서버 부담이 상대적으로 적고 구현 및 웹/앱에서 모두 사용이 가능하며,
    express에서 jwt 미들웨어의 지원도 강력하기 때문에 jwt token 인증방식을 선택하였다.

- swagger

  - 매번 API 문서를 수정해야하는 번거로움을 방지 하기 위해, swagger를 통해 api문서를 자동으로
    작성되도록 하였으며, swagger 페이지에서 api를 테스트해 볼 수도 있다.

- RDBMS : Postgresql

  - 실시간 예약과 결제 데이터가 있기 때문에 데이터의 일관성이 보장되는 RDBMS를 사용하기로 하였다.
  - MySQL에 비해 SQL 표준을 잘 따르고 완전한 오픈소스이며, 다국어 지원 기능을 위한 JSON type을
    활용할 수 있는 장점이 있어 선택하였다.

- Elasticsearch

  - 상품을 통합 검색하며 향후 실시간 예약 가능 여부에 대해서도 요구사항이 있을 수 있기 때문에
    별도 검색 엔진을 두는 것이 좋다고 판단하였다.

- ORM : knex.js & bookshelf.js

  - 초기 ORM에 대한 학습 비용이 있지만, 패턴을 익히면 별도 쿼리를 짜지 않아도 빠르게
    비즈니스 로직 개발이 가능하다고 판단하였다.
  - 성능에 대한 이슈가 있는 부분에 대해서만, 별도 쿼리를 작성하였다.
  - knex & bookshelf js : 간단하면서도 knex를 통해
    구체적인 쿼리 빌딩이 가능하다는 의견이 있어 선택하였다.

- Lucidchart(다이어그램 협업툴)

  - 데이터베이스 수정시에 Lucidchart에 변경사항을 반영하여, 실시간으로 수정내용을 알 수 있게 한다.

- Circle CI

  - 빌드/배포 자동화를 통해, 즉각적으로 수정 내용을 테스트/확인할 수 있도록 하였다.

- zinrelo(포인트관리 시스템)

  - 포인트 시스템에 대한 노하우를 얻고 실제 결제에 대한 위험부담이 있어서 외부라이브러리인
    zinrelo를 활용하였다.

- chatkit(채팅 라이브러리)
  - 웹소켓통신 서버에 대한 안정성 및 확장성, 채팅 데이터 관리의 용이성, 유틸들이 있어
    chakit 라이브러리를 활용하였다.

## 프로젝트 설계도

scv2.0의 프로젝트에서 담당 로직은 다음과 같다.

- 비글램 앱/웹의 백엔드(server side) 기능
- 데이터베이스 초기화/마이그레이션
- 스케줄링(배치)

```markdown
scv2.0
├── .circleci : circle ci 설정 파일
├── common : 공통 미들웨어/모듈 위치
├── database : 데이터베이스 초기화, 마이그레이션, 초기 데이터 파일 위치
│  ├── init-tables : DB 테이블 초기화
│  ├── migrations : DB 테이블 수정 내용
│  └── seeds : 초기 데이터 seed 파일
├── models : ORM 사용을 위한 데이터베이스 모델
│  ├── tb-bglam-users.js
│  ├── tb-shops.js
│  ├── ...
├── routes : 라우터 위치
│  ├── app-b2b : 앱 업체용 라우터
│  │ ├── business
│  │ │  ├── business-app-b2b-route.js
│  │ │  ├── ...
│  ├── app-b2c : 앱 고객용 라우터
│  ├── common : 앱/웹 공통으로 사용될 수 있는 라우터
│  │ ├── access
│  │ │  ├── access-common-route.js
│  │ │  ├── ...
│  ├── swagger : API 문서화를 위한 swagger 라우터
│  ├── web-b2c : 웹 고객용 라우터
│  ├── web-common : 웹 고객/업체 공통으로 사용될 수 있는 라우터
├── scheduler
│  ├── elasticsearch-scheduler.js
│  └── zinrelo-scheduler.js
├── services
│ ├── users-services.js
│ ├── shops-services.js
│ ├── ...
├── config.js : dev/test/production에 따른 계정/설정 정보
├── package.json : npm 정보
├── swagger.js : swagger 초기화
└── app.js : express app 초기화
```

### 라우터

#### 라우터 설계원칙

- RESTful API 설계 원칙 준수
- ES8 async/await 를 활용하여 비동기 처리 작성
- errorHandler 미들웨어를 작성하여, 에러 공통 관리
- response에 리턴은 명시적으로 작성하여 명확하게 한다.

```javascript
const router = require('express').Router()

// DB와의 통신을 담당할 service를 require한다.
const businessService = rootRequire('services/business-service')

// 라우터 로직에 errorHandler를 래핑시켜, try/catch 없이도, 에러 핸들링이 가능하도록 하였다.
router.get('/:businessId/shops', errorHandler(async (req, res, next) => {
  if (_.isEmpty(req.params.businessId))
    throw Err.badRequest('로그인을 다시 해주시기 바랍니다.')

  // await를 활용하여 비동기 처리
  const business = await businessService.selectBusiness({
                     id: req.params.businessId }, ['$vwShopOnlines'])

  res.json({
    result: true,
    // 명시적으로 return type을 지정해준다.
    business: {
      businessId: business.id,
      shops: _.map(business.$vwShopOnlines, v => ({
        shopId: v.shopId,
        shopName: v.name,
        ...
      }))
    }
  })
}))

module.exports = router
```

#### 서비스

ORM을 활용하여 DB에 질의를 한다. es6의 Destructuring을 활용하여,
여러 `related`(join table)들을 해올 수 있게 구성하였다.

```javascript
exports.selectBusiness = async (param = {}, [...relate] = []) => {
  const business = await $m.Business.forge()
    .query((qb) => {
      if (param && param.id) {
        qb.where('id', param.id)
      }
    })
    .fetch({ withRelated: [...relate] })
  return business ? business.toJSON() : null
}
```

#### 모델

```javascript
// tb-business.js
$m.Business = $bs.Model.extend({
  tableName: 'tb_business',
  hasTimeStamp: ['created_at', 'updated_at'],

  // 해당 테이블과 연관된 테이블의 관계를 정의하고, 함께 질의해올 수 있도록 한다.
  $vwShopOnlines() {
    return this.hasMany($m.VwShopOnline, 'business_id')
  },
})
```

## 핵심 모듈

### 오픈소스

- express : nodejs 환경에서 가장 많이 사용되는 web framework
- express-jwt : user access 보안을 위한 jwt 라이브러리
- body-parser : 클라이언트의 POST 요청에서의 body 추출을 위한 라이브러리
- cookie-parser : 클라이언트로부터 요청된 쿠키를 추출하기 위한 라이브러리
- compression : response 내용을 압축하여 성능을 향상 시키기 위한 도라이브러리구
- axios : http 요청을 위한 라이브러리
- multiparty : 파일 업로드를 위한 라이브러리
- lodash / partial-js : 데이터를 조작하기 위한 함수형 라이브러리
- moment : 시간에 대한 포맷을 변환하기 위한 라이브러리
- node-schedule : 주기적인 데이터 처리를 하기 위한 라이브러리
- swagger : API 문서를 웹페이지로 만들어주는 라이브러리
- node-mailer : 메일을 보내기 위한 라이브러리
- morgan : dev 환경에서의 logging 을 위한 라이브러리

### 외부 SDK

- aws elasticsearch : 빠른 검색을 위한 aws 서비스

## 데이터베이스 설계원칙

- 테이블에 "타입"을 두기 보다는 구체적인 새로운 테이블을 만든다.

  - 타입값을 두는 것이, 테이블 수를 줄이는 장점이 있지만, 개발자의 실수 가능성과
    테이블명이 모호해지는 단점이 있다고 판단하여, 새로운 테이블을 만드는 방식으로 설계하였다.

- view 테이블을 활용하여, 테이블 수가 많아져도 질의에 불편함이 없도록 한다.
- Default 값과 Not Null 값을 두어, 값이 잘못 입력되는 것을
  데이터베이스 제약조건 레이어에서 차단한다.

## 백엔드 구성에 대한 고민

### 공통화 및 추상화

공통화를 통해, 코드를 더욱 짧고 간결하게 하며 동일한 수정을 막는 장점이 있었지만
요구사항이 빈번하게 수정될 경우 오히려 다른 코드까지 영향을 주는 경우가 생겼다.
이런 지점에서 어떻게 코드를 작성해나가면 좋을지에 대한 고민을 했다.

#### 함수형 프로그래밍

최대한 함수 단위를 세밀하게 쪼개서 프로그래밍 함으로써, 중복되는 코드 작성을 막으면서도
의존성으로 인한 사이드 이펙트를 최소화한다. 또산 주석 없이도 더 간결한 코드 이해가 가능해진다.

#### 공통화는 가능하면 나중에

중복되는 코드가 생길때 바로 공통화를 해나가기 보다는 어느 정도 시간적 여유를 두고
공통화시켜도 되겠다는 판단이 되는 시점에서 작업하는 것이 요구사항 변경에 따른 불필요한 작업을 최소화
시킬 수 있을 거라는 판단이 들었다.

#### 라우터 구조

라우터에서의 함수형 프로그래밍을 잘 활용하기 위해서, "라우터" 폴더에
'helper 함수'를 두는 것이 좋다고 논의하였다. 예를 들어 일반 로그인과/카카오 로그인이 있다면,
**라우터 경로는 따로 두되, 공통으로 사용되는 부분을 helper 함수로** 분리 하는 것이다.

```markdown
access-kakao-route.js
access-normal-route.js
access-helper.js
```

### 마이크로 서비스 아키텍쳐

고객용 앱/웹, 업체용 앱/웹, 관리자용웹 과 같이 서비스가 커지고,
웹과 앱의 배포 방식 또한 다르다 보니 모놀리틱 아키텍쳐 방식에는 한계가 있음이 느껴졌다.
코드가 중복되는 지점이 있더라도, 하나의 백엔드 서버였던 것을 분리하며 일차적으로 서버를 분리하며,
향후에는 더욱 기능들을 모듈화하여 마이크로 서비스 아키텍쳐를 지향해야할 필요성을 절실히 느꼈다.

### 타입 시스템

요구사항 변경이 빈번하여 코드 수정이 많기 때문에, request와 response의 데이터 타입을
명시화해두지 않으면 작업은 빠르게 되겠지만 안정성이 심각하게 무너졌다.
또한 직접 호출해보지 않으면 어떤 데이터들이 오가는지 파악하기도 어려웠다.
그래서 타입을 명시화해주기로 하였으며, 향후 typescript 적용을 고민해보았다.

## 향후 발전 방향

- typescript 적용을 통해서 type safe 한 코드 작성
- 함수형 프로그래밍을 통해서 읽기 쉽고 짧은 코드 작성
- devops 를 위한 docker 적용 및 ci / cd 최적화
- 전체적으로 마이크로 서비스를 위한 백엔드 아키텍트 설계
- 데이터 분석을 위한 데이터 축적에 최적화 할 수 있도록 설계
- api 부하 테스트를 통해서 성능 저하가 발생하는 지점 중심으로 성능 개선
- 비동기 처리를 적극 활용하여 성능 개선
- 정적 리소스(이미지 등)는 별도로 서버를 구성
- redis(in memory) 적용으로 데이터 캐싱을 통해 성능 개선(혹은 LRU Cache 적용)
- auth 서버를 별로로 구성하여 private data 에 접근할시 안전하게 접근 가능하도록 guard 적용
- oauth 활용한 경우(kakao, google 등) oauth 인증 원칙에 맞춰서 설계 및 적용
