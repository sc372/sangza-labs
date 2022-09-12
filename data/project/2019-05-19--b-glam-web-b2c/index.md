---
title: bGlam | web-b2c
createdDate: "2019-05-19"
updatedDate: "2019-05-19"
author: sangza
category: project
project: bGlam

draft: false
---

## 프로젝트 기간 (project period)

- 2019.01 ~

## 요구사항 (requirements)

- 모바일 앱의 주요 기능 구현
- 모바일 프로그램의 한계인 SEO 를 보완하기 위해서 web 애플리케이션이 필요함
- 일반 사용자에게 마케팅이 가능하도록 public 한 정보를 쉽고 빠르게 제공
- 잠재적 파트너 의 접근성(입점 신청)이 필요
- 비교적 관심도가 낮은 사용자의 행동을 분석하고 데이터화 하여 플랫폼의 전략에 필요한 자료로 활용 되는 것이 목적

## 프로젝트 설계도 (project architect)

SSR 을 위한 react 의 next.js 프로젝트로서, next.js의 기본 구조를 따르되 그 외 구조는
`mobile-b2c`과 유사하게 작성되었다.

```markdown
web-b2c
├── .circleci : circle ci 설정 파일
├── pages
│  ├── common : 고객/업주 공통 페이지
│  │ ├── Chat.common.page.tsx
│  │ ├── Chat.common.style.css
│  │ ├── ...
│  ├── b2c : 고객 전용 페이지(common과 동일구조)
│  ├── \_app.tsx : 웹 최초 초기화시 실행
│  ├── \_document.tsx : 서버사이드에서 렌더 되는 header/meta 정보
│  ├── index.tsx : 메인페이지
│  └── index.style.css
├── src
│  ├── components : stateless 컴포넌트
│  │ ├── ChatList.component.tsx
│  │ ├── ChatList.style.css
│  │ ├── ...
│  ├── containers : stateful 컴포넌트
│  │ ├── b2b
│  │ │  ├── chat
│  │ │  │  ├── ChatList.b2b.container.tsx
│  │ │  │  ├── ChatList.b2b.style.css
│  │ │  │  ├── ...
│  │ │  ├──...
│  │ ├── b2c : (b2b와 동일구조)
│  │ ├── common : (b2b와 동일구조)
│  ├── layouts : 레이아웃
│  │  ├── partial
│  │  │  ├── Header.tsx
│  │  │  ├── ...
│  │  ├── Blank.layout.tsx
│  │  ├── ...
│  ├── server
│  │ ├── index.js : next 서버 초기화
│  │ └── next-routes.js : 라우터 정의
│  ├── store : rematch를 이용한 앱 state 저장소
│  │  ├── models : state 모델 정의
│  │  │  ├── b2c
│  │  │  │  ├── domain : 서버에서 받은 원본 domain 데이터
│  │  │  │  │  ├── access-b2c-domain-model.ts
│  │  │  │  │  ├── ...
│  │  │  │  ├── ui : domain 데이터를 가공한 ui용 데이터
│  │  │  │  │  ├── chat-lit-b2c-ui-model.ts
│  │  │  │  │  ├── ...
│  │  │  ├── b2b : (b2c와 동일구조)
│  │  │  ├── common : (b2c와 동일구조)
│  │  │  ├── helper : model 셋팅시 helper 함수 모음
│  │  │  │  ├── res-helper.ts : 서버 통신 후 response 셋팅 헬퍼
│  │  │  │  ├── ...
│  │  ├── types.tx : 모델에서 사용하는 공통 interface 모음
│  │  └── index.ts : rematch 초기화
│  ├── utils : 공통 유틸 함수 모음
│  │ ├── image-util.ts
│  │ ├── ...
├── env : dev/test/production에 따른 env 정보
├── static : static 파일
├── .babelrc : es 최신버전 사용을 위한 바벨 적용시
├── next.config.js : next 설정 파일
├── postcss.config.js : postcss config 파일
├── package.json : npm 정보
├── tsconfig.json : 타입스크립트 설정
└── tslint.json : 타입스크립트 린트 설정
```

- `pages/_app.tsx`

  - 최초 실행시, 1회 실행되는 next.js 파일
  - 페이지들은 \_app.tsx 의 자식으로 렌더된다.
  - state 저장소인`rematch` , `Google Analytics`, `라우터 변화 이벤트`,
    `유저정보 초기화` 등이 이루어진다.

- `pages/_document.tsx`

  - 서버사이드에서만 렌더링된다.
  - `static css/js` 파일들이 import 된다

- `src/server`

  - index.js : express 서버가 초기화 되며, 클라이언트 호출 url에 따라
    `nexts routes`를 사용할 수도 있고, 원하는 서버 비즈니스 로직을 실행시킬 수도 있다.
  - next-routes.js : 브라우저 url path와 실제 페이지를 매핑시킨다.

  ```typescript
  class ApplandingCommonPage extends React.Component<ITermProps> {
    // getInitialProps는 서버사이드에서만 호출된다.
    static async getInitialProps ({query}) {
      // next routes를 통해
      // query Param으로 넘긴 것을 getInitialProps를 통해 받을 수 있다.
      return {
        shopId: parseInt(query.shopId, 10),
        serviceId: parseInt(query.serviceId, 10),
        serviceOptionId: parseInt(query.serviceOptionId, 10)
      }
    }
    ...
  }
  ```

- `src/components`

  - `b2c/b2b/common` 을 구분하지 않고, 재사용 가능한 순수 컴포넌트 들이 위치한다.

- `src/containers`
  - `b2b/b2c/common` 으로 구분된다.
  - `rematch` 를 통해 state 값이 컴포넌트에 매핑되는 형식의 컴포넌트 들이 위치한다.

## 시연영상 (rehearse)

[![bGlam B2C web](https://img.youtube.com/vi/wVIrlDs1w_8/0.jpg)](http://www.youtube.com/watch?v=wVIrlDs1w_8 "bGlam B2C web")
