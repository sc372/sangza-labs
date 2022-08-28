---
title: bGlam | mobile-b2b
createdDate: "2019-05-21"
updatedDate: "2019-05-21"
author: sangza
project:
  - bGlam

draft: false

---

## 프로젝트 기간  (project period)
  - 2018.01 ~

## 요구사항  (requirements)
  - 업체 관리 솔루션 으로 발전해 가는 것이 목적임
  - 사용자 입장에서 접근성 좋아야 함
  - 티켓관리, 회원, 직원 관리, 비지니스 서포팅 등 기능이 필요함
  - 정확한 데이터 처리가 필요함
  - 폼입력에 대한 확실한 유효성 검사가 필요함
  - 푸시 기능 (채팅, 티켓 구매/티켓 취소/예약 요청/환불처리)
  - 파트너 사용자의 행동 추적을 위한 데이터베이스 확보 해야함

## 주요 논의 사항  (discussions)

### 업체 관리 솔루션  (business solution)
업체에서 요구되는 회원 관리, 직원 관리, 제품 관리 등 자원 관리가 필요한데 그 부분에 대한 솔루션으로서의 기능을 
충족시켜 줄 수 있는 프로그램이어야 한다.

### 코르도바  (cordova)
관리 프로그램은 사용자가 빠르고 쉽게 접근 할 수 있는 형태가 필요하다고 생각해서 업체 데스크탑으로는 웹 접근, 개개인은 
모바일에서 빠르게 접근할 수 있는 형태가 적절하다고 생각해서 
하이브리드 웹앱을 만들 수 있는 코르도바를 활용하는 것으로 판단했다.

### 퀘이사 vs 아이오닉  (quasar vs ionic)
코르도바를 활용한 프레임워크 중에 ionic 이 가장 유명하고 커뮤니티가 크다. 하지만 비글램 플랫폼의 대부분이 react 를 사용하고 있고 
angular 가 학습 부담이 크다. 하지만 react 생태계에는 코르도바를 활용한 적절한 프레임워크가 없다. 
그래서 비교적 학습에 대한 부담이 적은 vue 를 활용한 quasar 를 선택하게 되었다. 
하지만 qusar 는 커뮤니티가 작고 코르도바 지원이 풍부하지 않아서 개발 기간중에 많은 어려움을 겪게 되었다. 
그리고 버전이 0.x 버전으로 안정화 되어 있지 않은 부분이 있다.
만약 이후 새롭게 프로그램을 만든다면 angular 를 학습하고 ionic 을 활용하는 것이 더 낫다고 생각하는 팀원이 있다.
(지금은 react 를 활용한 ionic 이 개발되었다. 하지만 아직 베타 라서 안정성에 의문이다.)

### 유효성 검사  & 폼 입력  (validation & form)
관리 프로그램의 특징인 폼(form) 입력이 많은데 정확한 데이터의 정확성이 필수적으로 요구되기 때문에 
유효성 검사를 꼼꼼히 할 수 있는 기능이 되어 있어야 한다.

### 모델 설계  (modeling)
데이터 트랜젝션이 빈번히 이루어지는 특징이 있고 데이터의 무결성이 검증 되는 것이 주요하다고 판단이 되어서 
UI / domain 모델을 나누고 데이터 의 불변성을 유지하기 위한 노력이 필요하다고 판단한다.(vuex 를 이용한 state management)

### 비지니스 서포트  (business support)
파트너 사용자 입장에서의 필요한 기능을 제공하여 더욱 앱에 몰입 할 수 있도록 돕고 
실제로 비지니스에 유효하도록 데이터 분석을 통해서 정보를 제공해 줄 수 있는 플랫폼으로 발전 시키는 부분이 필요하다.

## 프로젝트 설계도  (project architect)

하이브리드 앱 제작을 위한 quasar framework의 기본 구성을 지켰다.

```markdown
works-app
├── .quasar							: quasar 설정 파일
├── src
│ 	├── pages						: 페이지
│ 	│	├── access
│ 	│	│ 	├── SignInPage.vue
│ 	│	│ 	├── ...
│ 	├── components					: stateless 순수 컴포넌트
│ 	│	├── CheckboxComponent.vue
│ 	│	│ 	├── ...
│ 	├── containers					: stateful 컴포넌트
│ 	│	├── laboratory
│ 	│	│ 	├── LaboratoryContainer.vue
│ 	│	│ 	├── ...
│ 	├── layouts						: 레이아웃
│ 	│ 	├── partial
│ 	│ 	│ 	├── Header.tsx
│ 	│ 	│ 	├── ...
│ 	│ 	├── Blank.layout.tsx
│ 	│ 	├── ...
│ 	├── plugins						: 앱 초기화시 등록될 플러그인들
│ 	│	├── axios.js
│ 	│	├── lodash.js
│ 	│	├── ...
│ 	├── store						: vuex 관련 파일
│ 	│ 	├── helper
│ 	│ 	│ 	└── model-helper.js
│ 	│ 	├── layout-model.js
│ 	│ 	├── ...
│ 	│ 	└── index.ts
│ 	├── router						: 라우터
│ 	│	├── index.js		
│ 	│	└── routes.js	
│ 	├── statics						: 스태틱 파일
│ 	└── App.vue						: vue 최초 진입 파일
├── config							: dev/test/production에 따른 env 정보
├── dist							: 웹으로 빌드시 결과 html/js/css 파일
├── .babelrc						: es 최신버전 사용을 위한 바벨 적용시
├── quasar.conf.js					: quasar 설정 파일
├── postcssrc.js					: postcss config 파일
├── package.json					: npm 정보	
├── tsconfig.json					: 타입스크립트 설정
└── tslint.json						: 타입스크립트 린트 설정
```

- `src/store/layout-model.js`
  - 모델 파일은 state / getters / mutations / actions 로 구성
  - `namespaced: true` 값을 통해, 중복된 값이 없도록 한다.
  - helper 를 통해 공통적으로 필요한 변수 및 함수를 추가한다.
  - state : 변수와 http 통신에 필요한 상태값, 성공여부 등이 들어간다.
  - getter : UI에 렌더링에 필요한 state 변수의 경우는 getter 를 통해 사용한다.
  - mutation : state 변경시 mutation 을 통해서만 할 수 있다.
  - actions : state 를 변경하기 위해, http 통신을 사용하는 경우 action 을 호출하고 action 내에서 mutation 을 호출한다.
    
```javascript
// layout-model.js
import { stateHelper, mutationHelper, getterHelper } from './helper/model-helper'

const state = {
	...stateHelper,
	isDrawerOpen: false,
}

const getters = {
    ...getterHelper,
    getIsDrawerOpen: state => state.isDrawerOpen
}

const mutations = {
    ...mutationHelper,
    SET_IS_DRAWER_OPEN: (state, payload) => state.isDrawerOpen = payload
}

const actions = {
}

export const layout = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}
```



## 주요 기능  (core features)
*비글램 업체용 works App 시연영상*

[![시연영상](https://i.postimg.cc/Pr4nmy5B/image.png)](https://youtu.be/ynQbqWL6l-g "bGlam works app")

  - 로그인
    - JWT 토큰 인증방식으로 로그인 기능 구현
      
  - 상점관리/서비스/사업관리
    - 태그, 이미지, 운영시간, 태그, 주소 등 다양한 값 CRUD 및 validation
      
  - 직원가입 및 관리
    - 사업자 가입
    - 직원 가입 : 회사코드를 입력하여 사업장에 직원으로 가입
    - 사업장에 소속된 직원 권한 정보 관리
      
  - 예약관리
    - 예약 준비/완료/예약취소 기능
    - 예약 정보 수정
      
<img src="https://i.postimg.cc/g2ZyCSL7/image.png" width="200" />

  - 스케줄 관리
    - vue fullcalendar 를 통해 제작
    - 예약 내용 확인
    - 예약 등록 및 수정 : 드래그 앤 드롭을 통해 예약 등록
      
<img src="https://i.postimg.cc/tRNMfTG6/image.png" width="500" />

## 향후 발전 방향(partner-app)
  - 타입스크립트를 일부만 적용범위를 확장하여 정적 분석을 통해서 오류 최소화
  - 기능이 추가될 수록 논리적인 데이터 모델링에 대한 검토는 필수
  - Oauth2.0 을 적용하여 유저 가입이 용이하도록 개선
  - 채팅 기능을 추가하여 일반 사용자 <-> 업체 사용자간 소통 개선
  - 데이터 분석을 심층화 하여 비지니스 윈윈 전략을 위한 프로그램으로 발전
