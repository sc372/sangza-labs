---
title: 블로그 개편 | Next.js MDX (0)
createdDate: '2023-02-11'
updatedDate: '2023-02-11'
author: sangza
category: series
categoryTitle: make-blog
categoryOrder: 0
tags:
  - next.js
  - blog
  - ssg
  - markdown
description:
draft: false
---

최근 여유가 생겨서 오랬동안 방치되어 있던 블로그를 새로 단장하게 되었다.\
새해를 맞이하여 봄에 대청소 하듯이 묵은 때를 벗겨내고 싶은 마음이 있었다.\
관리하지 않던 소스코드를 오랜만에 열어 보았더니,\
너무 생소해서 구조 및 내용을 파악하는데 꽤 많은 시간이 걸릴 것 같았다.\
그래서..

## Gatsby.js 에서 Next.js

기존 블로그(3년전 제작) 는 React.js 와 Typescript 를 활용한 정적 웹사이트로 제작이 되었었다.\
당시 정적 웹사이트 제작을 빠르고 편리하게 할 수 있었던 [Gatsby.js](https://www.gatsbyjs.com) 라는 프레임워크를 사용했었다.\
오랜만에 살펴보니 꽤 안정적이고 많이 쓰이는 프레임워크로 성장하여 지금도 많은 사람들이 활용하고 있었다.

오랜만에 봐서 그런지 하나도 기억이 나지 않아서 다시 공식홈페이지 문서를 보면서 소스코드를 분석해나갔다.\
그러다가 잠깐 구글링을 통해서 요즘에는 보통 블로그를 어떤 도구로 블로그를 제작하는지 알아봤다.\
최근에는 Next.js 를 활용해서 제작하는 경우도 많은 것 같았다.

[Next.js](https://nextjs.org) 는 예전에 다니던 회사에서 사용해 본적이 있었다.\
당시에는 동적 웹앱에서 [서버사이드 렌더링(SSR)](https://www.youtube.com/watch?v=iZ9csAfU5Os) 을 통해서 [SEO](https://www.ascentkorea.com/seo-complete-guide-2022) 최적화를 하기 위해서 사용했던 기억이 있는데,정적 웹사이트를 제작하는데에도 문제 없이 제작이 가능하는 것 같았다.

기본적으로 React.js 를 활용하고 [Markdown](https://projectunknown.tistory.com/2) 을 원활히 지원하고 SEO 최적화가 손쉬워야 하는데,\
여러 글들을 읽어보니 해당 기능은 원활히 지원하는 것 같았다.\
그리고 크게 공감했던 내용이 Gatsby.js는 대부분의 기능을 자체 스펙을 통해 만들어진 플러그인을 통해서 구현을 하고,\
나로서 많이 익숙하지 않은 [GraphQL](https://tech.kakao.com/2019/08/01/graphql-basic/) 을 통해 데이터를 Fetch 한다.\
이로 인해서 프레임 워크 의존성이 강해지고 특정 기술을 의무적으로 사용해야 하는 것이다. ([참고](https://yceffort.kr/2020/10/migrate-gatsby-from-nextjs#1-%EB%82%98%EB%8A%94-%EC%99%9C-nextjs%EB%A1%9C-%EA%B0%94%EB%82%98))

의존성이 강한 프레임워크를 활용하는 것은 빠르고 간편하게 기능을 구현할 수 있지만,\
여러 기능들을 유연하게 활용하지 못하는 단점도 있다.\
그리고 해당 기능에 대한 깊은 이해 없이 마구 가져다 사용하는 습관이 생길수도 있는 점도 주의를 해야 한다. ([스프링](https://ttl-blog.tistory.com/86)도 의존성이 매우 강한 프레임워크..)

Next.js 도 프레임워크이긴 한데,\
Gatsby 보다는 의존성이 약간 덜하기도 하고 업계에서 워낙 평이 좋아 많이 쓰이고,\
내가 필요로 하는 수준의 정적 웹사이트를 제작하는데 있어서 부족함은 없어 보였다.\
어차피 Gatsby.js 를 거의 새로 배워야 하는 상황이고 Next.js 를 사용해본 경험으로 거부감은 없어서,\
이번에 다시 공부하면서 Next.js 를 활용하여 새로 제작하기로 결정 했다.

## Markdown & MDX

[MDX](https://mdxjs.com) 는 마크다운 형식의 문서를 컴포넌트에서 활용할 수 있도록 하는 도구이다.\
Gatsby.js 에서는 마크다운을 플러그인으로 구현하게 되어 있는데,\
Next.js는 [공식 문서 에서 @next/mdx](https://nextjs.org/docs/advanced-features/using-mdx) 등의 라이브러리를 활용하여 사용하도록 제안하고 있다.\
하지만, 난 next-mdx-remote 라이브러리를 활용하여 md 파일을 parsing 하는 방식으로 처리 했다.([참고](https://blog.kfirfitousi.com/posts/web-dev/mdx-nextjs-13))

## TailwindCSS

평소 CSS 를 적극적으로 다루지 않기 때문에 CSS 는 항상 마음의 부담이다.\
최근 관심이 좀 있던 [Tailwind](https://tailwindcss.com/) 를 이번에 좀 적극적으로 활용해보고 싶었다.\
프로젝트에서 CSS 구조를 어떻게 잡아야 하는지 잘 모르기도 해서,\
어떤 기준이 되는 방식을 잘 따라가면 좀 수월하지 않을까 싶은 마음에서 선택하게 됐는데, 나름 잘 활용할 수 있었다.\
Theme 설정하는 방식도 잘 되어 있고, 까다로운 부분은 확장하여 CSS를 직접 활용할 수 있는 점도 좋았다.

현업에서 실제 퍼블리싱을 전문적으로 하는 지인의 이야기로는 찬반이 나뉜다고 한다.\
반대 의견으로는 디자인의 요구사항을 유연하게 수용하여 작업하는데 어려움이 많다고 한다.

## Recoil (+hooks)

상태관리 라이브러리로는 페이스북에서 주도하고 있는 [Recoil](https://recoiljs.org/ko/) 를 사용해보기로 했다.\
이전에는 [Redux](https://ko.redux.js.org/)([+Saga](https://tech.trenbe.com/2022/05/25/Redux-Saga.html)) 를 사용했던 경험이 있는데,\
아무래도 React 생태계를 주도 하고 있는 페이스북에서 개발한 도구를 사용하는게 좋지 않을까 싶어서 였다.\
상대적으로 사용하기 쉬웠던것 같아서 잘 적응했다.\
([hooks](https://ko.reactjs.org/docs/hooks-intro.html) 와 결합하여 사용해서 비지니스 로직과 데이터의 흐름을 원활하게 사용할 수 있었다.)

IO 와 같은 비동기 요청이 별로 없어서 많이 활용하지는 못했다.\
서버에 API 요청 등의 비동기 요청이 많은 다른 프로젝트에서 적극적으로 활용해봐야겠다.

## 회고

회사에서 가끔 UI 개발을 하는데 주로 Vue.js 를 사용해서 사이드 프로젝트를 해야만 React.js 를 사용해볼 수 있었는데,\
오랜만에 블로그 새단장도 할겸, React.js 를 둘러싼 요즘 기술들을 조금이나마 경험할 수 있었다.

그리고 언제나 공개되어 있는 자료의 도움을 많이 받고 있는데 그 중에 [yecffort 님의 글과 소스코드](https://yceffort.kr/2020/10/migrate-gatsby-from-nextjs)로 부터 많이 배울 수 있었다.

다음 포스트에서는 프로젝트 구조와 주요 로직에 대한 글을 포스팅 할 예정이다.
