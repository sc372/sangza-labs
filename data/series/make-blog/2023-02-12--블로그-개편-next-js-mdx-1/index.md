---
title: 블로그 개편 | Next.js MDX (1)
createdDate: "2023-02-12"
updatedDate: "2023-02-12"
author: sangza
category: series
categoryTitle: make-blog
categoryOrder: 1
tags:
  - next.js
  - blog
  - ssg
  - markdown
description:
draft: true
---

지난 `포스트`에 이어서 구체적인 프로젝트 구조와 주요한 기능에 대한 내용을 기록하려고 한다.

## 프로젝트 구조

![Alt text](/static/images/series/make-blog/project-structure.png)

- common : 공통적으로 사용하는 상수/타입/인터페이스 등 정의 모음
- components : 컴포넌트 모음 (atomic pattern)
- data : markdown 문서 모음
- generators : template generator 를 위한 파일 모음 (with plop.js)
- hooks : react hooks 모음
- modules : recoil module 모음
- pages : page 컴포넌트 모음
- public : 배포될 정적 파일 모음
- styles : 스타일 파일 모음
- utils : 유틸리티 모음
- orther : 각종 설정 파일들..

## 주요 기능

### Next.js 에서의 SSG(Static site generation)

보통 SPA는 사용자에게 Javascript 묶음을 제공해주면 Client side rendering(이하 CSR) 을 통해서 동적으로 화면을 구성 하는 방식을 사용해서 Javascript 내용이 많다면 성능에 이슈가 발생할 수 있는 잠재적 한계가 존재 한다.\
이런 부분을 해소하고자 Server side rendering(이하 SSR), Static site generation(이하 SSG) 를 활용하여 비교적 빠르게 웹앱을 구성할 수 있다.

Next.js 에서 제공하는 Static site generation(이하 SSG) 은 빌드시점에 웹페이지를 생성하여 사전 렌더링(Pre-rendering)을 통해 사용자에게 보다 빠르게 컨텐츠를 제공하는 기능이다.

### 검색엔진 최적화(SEO)

### MDX for Markdown

MDX 는 컴포넌트 기반 웹사이트 제작시 markdown 을 통합하는데 주로 사용하는 도구이다.
next-mdx-remote 라는 Next.js 에서 MDX 를 사용하기 용이한 도구를 사용해서 markdown 파일을 parsing 했다.

next-mdx-remote 는 .md / .mdx 모두 지원하였는데 .md 파일만 사용했다.

개발 관련 내용을 주로 다루다보니 소스코드를 삽입하는 경우가 많다. prism.js 라는 소스코드를 보기좋게 표현해주는 도구가 있는데 React.js 에서 사용하기 용이한 도구인 prism-react-renderer 를 사용하여 구현하였다.
