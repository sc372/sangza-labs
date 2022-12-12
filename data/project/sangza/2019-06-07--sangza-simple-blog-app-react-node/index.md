---
title: sangza | simple-blog-app-react-node
createdDate: '2019-06-07'
updatedDate: '2019-06-07'
author: sangza
category: project
project: sangza

draft: false
---

## 프로젝트 기간

- 2018.05.29 ~ 2018.06.06

## 원격 저장소

- [github](https://github.com/sc372/simple-blog-app-react-node)

## 요구사항

- 댓글 기능이 있는 간단한 블로그 웹 애플리케이션
- 회원 가입
- 회원 정보 수정
- 블로그 게시물 CRUD
- 블로그 게시물 댓글에 대한 CRUD
- 블로그 게시물 댓글의 댓글에 대한 CRUD

## 개발 일정

- 1 day : (front) page, layout ui 작성, router 적용
- 2 day : (front) ui에 필요한 component 작성(1)
- 3 day : (front) ui에 필요한 component 작성(2)
- 4 day : (front) redux 적용, model 설계 및 작성
- 5 day : (back) 프로젝트 초기화, 회원가입 / 탈퇴 / 로그인 로직 작성
- 6 day : (back) 블로그 CRUD, 블로그 댓글 CRUD
- 7 day : (back) 페이지 별로 요청 데이터 응답해주기

## 프론트엔드

### 기술 스택

#### 핵심 모듈

- [react.js (v.16.8.6)](https://reactjs.org/)
- [CRA (v.3.0.1)](https://github.com/facebook/create-react-app) : 커뮤니티 공식 react app starter
- [react-app-rewired (v.2.1.3)]() : CRA 에서 webpack eject 하지 않고 사용하는 설정 도구
- [customize-cra (v.0.2.12)](https://github.com/arackaf/customize-cra) :
  react-app-rewired 와 함께 webpack 대신 사용하는 설정 도구
- [react-router (v.4.4.0.beta)](https://github.com/ReactTraining/react-router) : 라우팅 도구
- [redux (v.4.0.1)](https://github.com/reduxjs/redux) : 상태관리 라이브러리
- [redux-sagas (v.1.0.2)](https://github.com/redux-saga/redux-saga) : 사이드 이펙트 코드를 효과적으로 작성할 수 있는 도구
- [sass](https://sass-lang.com/) : 구조적으로 css 사용 가능
- [ramda.js](https://ramdajs.com/) : collection 핸들링을 돕는 함수형 라이브러리
- [moment (v.2.24.0)](https://momentjs.com/) : 시간 관련 포맷 도구
- [axios (v.0.19.0)](https://github.com/axios/axios) : http 통신을 위한 도구

#### 정적 분석

- [typescript (v.3.4.5)](https://www.typescriptlang.org/)
- [eslint with typescript (v.5.16.0)](https://eslint.org/) : 문법 검사 도구(js + ts)
- [prettier (v.1.17.1)](https://prettier.io/) : 코드 포매터

#### 컴포넌트 라이브러리

- [antd](https://ant.design/) : ui component
- [react-cropper (v.1.2.0)](https://github.com/roadmanfong/react-cropper) : 이미지 사이즈 조절
- [react-infinite-scroll-component (v.4.5.2)](https://github.com/ankeetmaini/react-infinite-scroll-component) :
  무한 스크롤
- [react-quill (v.1.3.3)](https://github.com/zenoamaro/react-quill) : 텍스트 에디터
- [react-responsive (v.6.1.2)](https://github.com/contra/react-responsive) : css 없이 screen size 핸들링 도구

### 프로젝트 설계도

```
├── build                                     : build 된 파일 모음
├── node_modules                              : npm 모듈 모음
├── public                                    : 정적 리소스 모음
├── src                                       : 정적 리소스 모음
│ 	├── api 			      : api 통신을 위한 파일들
│ 	├── components			      : ui component 파일들
│ 	├── models 			      : model 파일들
│ 	├── pages 			      : page 파일들
│ 	├── redux 			      : react-redux 파일들(sagas 포함)
│ 	├── styles 			      : styles 파일들
│ 	├── test 			      : test 파일들
│ 	├── utils 			      : 유틸리티 파일들
│ 	├── App.tsx 			      : 라우트, helmet 정의
│ 	├── index.tsx 			      : app 시작 지점
│ 	├── PrivateGuard.tsx 		      : route guard 핸들러
│ 	├── react-app-env.d.ts 		      : CRA 를 통해 만들어진 환경변수 정의 하는 파일로 추측됨(미사용)
│ 	├── Root.tsx 			      : redux store wrapping
│ 	└── serviceWorker.ts 		      : 브라우저 외부에서 다양한 기능들을 활용할 수 있도록 돕는 기능
├── typings                                   : type 정의
├── .env				      : 환경 변수 정의
├── .eslintrc.js			      : eslint 설정
├── .gitignore				      : git 제외 설정
├── .prettierrc 			      : prettierrc 설정
├── config-overrides.js			      : react-app-rewired 설정
├── package.json			      : npm 정보
├── README.md  				      : read me
└── tsconfig.json			      : 타입스크립트 complie 설정
```

### 주요 특징 및 회고

- 정적분석도구(typescript, eslint, prettier) 의 강력한 정적 분석으로 실수를 줄일 수 있었다.

- [pure component](https://medium.com/@async3619/when-to-use-component-or-purecomponent-b810897a19a2) 를
  거의 전부 구현(antd 의 의존성으로 modal에서의 폼 제외) 하였다. pure component 특징인 얕은 비교와 렌더링 을 최소화 할 수 있는
  장점을 최대로 활용하기 위해서 였다. 과정 중에 렌더링과 비동기 로직과의 핸들링에 어려움이 있었다.
  [react hooks](https://velog.io/@velopert/react-hooks) 를 활용 하여 대안을 찾아 나갔다.

- redux model 설계시 객체 깊이가 깊은 모델을 설계 하지 않아야 reducer 로직 구현 및 객체 복사에 대한 비용을 줄일 수 있다.
  로직이 복잡해짐에 따라 다시 설계를 하지 않으려면 처음 설계때 부터 모델 설계시 도메인을 잘 분리하고
  크기가 크지 않게 설계 해야 로직 구현이나 비용이 적은 프로그램을 만들 수 있는 것 같다.

- ui, domain 모델을 분리하여 각 필요에 맞게 활용하였는데 설계시 좀 장황한 느낌은 있으나
  로직 구현 및 데이터를 활용할 때에는 깔끔하고 오류를 줄일 수 있어서 좋았다.

- React.lazy 함수를 통해서 컴포넌트 지연평가를 적용하여 컴포넌트 를 원하는 시점에 로드 할 수 있도록 해서
  비동기 통신과 컴포넌트의 논리적 구성에 대한 대응방법을 알 수 있었다.(route gaurd 에 적용)

- any 타입을 사용하지 않을 수 있도록 타입 정의를 꼼꼼하게 하는 것은 중요하나 시간이 많이 걸리는 작업이라서 적절한 타협을 했다.

## 백엔드

### 기술 스택

- OOP (object oriented programming)
- [Mango framework](https://github.com/MrARC/Mango)

#### 핵심 모듈

- [node.js (v.10.1.5.3)]()
- [express.js (4.16.4)](https://expressjs.com/ko) : nodejs micro 웹 프레임워크
- [pg (v.7.10.0)](https://node-postgres.com/) : postgresql 라이브러리
- [typeorm (v.0.2.9)](https://typeorm.io/) : typescript 지원 orm
- [jsonwebtoken (v.8.4.0)](https://github.com/auth0/node-jsonwebtoken) : json web token 라이브러리
- [typeDI (v.0.8.0)](https://github.com/typestack/typedi) :
  [의존성 주입(DI)](https://ko.wikipedia.org/wiki/%EC%9D%98%EC%A1%B4%EC%84%B1_%EC%A3%BC%EC%9E%85) 라이브러리
- [routing-controller (v.0.7.7)](https://github.com/typestack/routing-controllers) :
  express.js 에서 활용 가능한 controller(http, routing) 라이브러리
- [winston (v.3.1.0)](https://github.com/winstonjs/winston) : logger 라이브러리
- [ramda.js](https://ramdajs.com/) : collection을 핸들링을 돕는 함수형 라이브러리
- [moment (v.2.24.0)](https://momentjs.com/) : 시간 관련 포맷 도구
- [axios (v.0.19.0)](https://github.com/axios/axios) : http 통신을 위한 도구

#### 정적 분석

- [typescript (v.3.4.5)](https://www.typescriptlang.org/)
- [tslint (v.5.12.0)](https://palantir.github.io/tslint/) : 문법 검사 도구
- [prettier (v.1.17.1)](https://prettier.io/) : 코드 포매터

### 프로젝트 설계도

```
├── dist                                      : build 된 파일 모음
├── node_modules                              : npm 모듈 모음
├── public                                    : 정적 리소스 모음
├── src
│ 	├── api.v1 			      : api ver.1
│ 	│ 	├── auth                      : auth (jwt)
│ 	│ 	├── blog                      : blog CRUD
│ 	│ 	├── blog-comment              : blog-comment CRUD
│ 	│ 	├── blog-comment-comment      : blog-comment-comment CRUD
│ 	│ 	├── common                    : 공통 사용 객체
│ 	│ 	└── user                      : user CRUD
│ 	├── database
│ 	│ 	└── database.ts               : database 세팅 및 연결 기능
│ 	├── handlers
│ 	│ 	├── api_error.handler.ts      : api error 핸들링 객체
│ 	│ 	└── api_response.handler.ts   : api 응답 핸들링 객체
│ 	├── helpers 			      : page 파일들
│ 	│ 	├── authorization_check...    : auth 체크 객체
│ 	│ 	└── current_user_check...     : jwt decoding 을 통해 사용자 확인 객체
│ 	├── logger 			      :
│ 	│ 	└── logger.service.ts         : winston logger 객체
│ 	├── middleware
│ 	│ 	├── error.middleware.ts       : error 미들 웨어
│ 	│ 	├── http_logging.middleware.ts: http logging 미들웨어
│ 	│ 	└── not_found.middleware.ts   : 찾을 없는 요청에 대한 처리 미들웨어
│ 	├── migration 			      : database migration
│ 	├── utils
│ 	│ 	└── json.utils.ts             : json wrapper util 객체
│ 	├── app.ts 			      : application init 객체
│ 	└── www.ts 		              : 서버 동작에 대한 객체
├── tests
├── .env				      : 환경 변수 정의
├── .tslint.json			      : tslint 설정
├── .gitignore				      : git 제외 설정
├── .prettierrc 			      : prettierrc 설정
├── ecosystem.config.js			      : [pm2](https://massivcode.com/5) 를 활용한 배포 동작 세팅
├── ormconfig.json			      : typeorm 설정
├── nodemon.json			      : dev 모드에서 watch를 위한 [nodemon](https://nodemon.io/) 설정
├── package.json			      : npm 정보
└── tsconfig.json			      : 타입스크립트 complie 설정
```

### 주요 특징 및 회고

- [Mango framework](https://github.com/MrARC/Mango) 를 활용하여 작업하였는데 java의
  spring framework 장점인 DI 기반으로 디자인이 되어 있어서 node.js 환경에서 spring 과 비슷한 작업이 가능하였다

- typeorm을 사용하여 DB 모델을 설계하고 객체를 만들어서 비교적 안정적으로 서버 코드 관리를 할 수 있었다.

- typescript 를 통해 nodejs 에서 oop 프로그래밍을 하는 것은 javascript 를 주로 사용해오던
  입장에서 아직 익숙하지 않는 지점은 많지만 oop 개념에 대한 학습과 java를 동시에 학습하는 것 같은 효과가 있다.

- image 파일은 base64 포맷으로 문자열로 컬럼에 저장하였는데, 장점으로는 일반 문자열 처럼
  데이터 핸들링이 간편하고 정적 리소스를 따로 관리하지 않아도 되다. 단점으로는 용량이 37% 정도 늘어나는 단점이 있다.

- 정적분석도구(typescript, tslint, prettier 의 강력한 정적 분석으로 실수를 줄일 수 있었다.

- any 타입을 사용하지 않을 수 있도록 타입 정의를 꼼꼼하게 하는 것은 중요하나 시간이 많이 걸리는 작업이라서 적절한 타협을 했다.
