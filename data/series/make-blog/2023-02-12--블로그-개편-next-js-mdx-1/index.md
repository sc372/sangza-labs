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
draft: false
---

지난 `포스트`에 이어서 구체적인 프로젝트 구조와 주요한 기능에 대한 내용을 기록하려고 한다.

## 프로젝트 구조

![project-structure](/static/images/series/make-blog/project-structure.png)

- `common` : 공통적으로 사용하는 상수/타입/인터페이스 등 정의 모음
- `components` : 컴포넌트 모음 (atomic pattern)
- `data` : Markdown 문서 모음
- `generators` : template generator 를 위한 파일 모음 (with plop.js)
- `hooks` : react hooks 모음
- `modules` : recoil module 모음
- `pages` : page 컴포넌트 모음
- `public` : 배포될 정적 파일 모음
- `styles` : 스타일 파일 모음
- `utils` : 유틸리티 모음
- `orther` : 각종 설정 파일들..

## 주요 기능

### Next.js 에서의 SSG(Static site generation)

보통 Single page application(이하 [SPA](https://poiemaweb.com/js-spa))은 사용자에게 Javascript 묶음을 제공해주면 Client side rendering(이하 [CSR](https://velog.io/@hanei100/TIL-SSR-vs-CSR-%EC%B0%A8%EC%9D%B4)) 을 통해서 동적으로 화면을 구성 하는 방식을 사용해서 Javascript 내용이 많다면 성능 이슈가 발생한다.\
(Javascript Chunk 단위로 나눠서 필요할때 필요한 파일만 요청하는 기법등도 있긴 하지만 한계가 있다.)\
이런 부분을 해소하고자 Server side rendering(이하 [SSR](https://d2.naver.com/helloworld/7804182)), Static site generation(이하 [SSG](https://blog.lgcns.com/2336)) 를 활용하여 비교적 빠르게 웹앱을 구성할 수 있다.

Next.js 에서 제공하는 SSG 는 빌드시점에 웹페이지를 생성하여 `사전 렌더링(Pre-rendering)`을 통해 페이지를 생성하고 CDN등의 서버에 배포하여 사용자에게 보다 빠르게 컨텐츠를 제공하는 기능이다.

![nextjs_ssg_1](/static/images/series/make-blog/nextjs_ssg_1.png)

소스코드 내부적으로 처리되는 방식은 다음과 같다.

![nextjs_ssg_2](/static/images/series/make-blog/nextjs_ssg_2.png)

### 동적 라우팅(Dinamic route)

Next.js 에서는 경로가 `pages` 디렉토리 이하로 디렉토리 깊이에 따라 정해진다.\
이를테면, 파일 경로가 `pages/about/index.tsx` 인 경우에는 `{domain}/about` 가 경로로 정해지는 것이다.

![nextjs_dynamic_route_1](/static/images/series/make-blog/nextjs_dynamic_route_1.png)

정적으로 정의된 경로가 아니라 동적으로 경로가 정해지는 경우에는 `Square brackets([])` 를 디렉토리나 파일명에 사용해야 한다.
이를테면, 파일 경로가 `pages/blog/[slug].tsx` 인 경우에는 `{domain}/blog/{slug}` 가 경로로 정해지는 것이다.

![nextjs_dynamic_route_2](/static/images/series/make-blog/nextjs_dynamic_route_2.png)

***동적 라우트 참고***

- [Dynamic Routes(Next.js)](https://nextjs.org/docs/routing/dynamic-routes)
- [next.js의 Dynamic Routes(동적라우트)](https://jake-seo-dev.tistory.com/138)

### getStaticProps

빌드시 Markdown 파일로부터 데이터를 받아와서 컴포넌트와 결합되어 HTML을 생성하는데 필요한 함수이다.

```typescript
// pages/blog/[slug].tsx

...

interface Params {
  [key: string]: string | undefined
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // 파라미터에 있는 페이지의 동적 경로 정보
  const { slug } = params as Params

  // 동적 경로 정보를 통해서 렌더링할 데이터 받아오기
  const post = getPostBySlug(slug)

  // 랜더링할 데이터 정리 및 리턴
  const makeResult = async (a: Post) => ({
    slug: a.slug,
    frontMatter: a.meta,
    mdxContent: await markdownToHtml(a.content),
  })

  const props =
    post !== null ? await fpFunction.pipe(post, await makeResult) : []

  return {
    props,
  }
}

...

```

이 함수는 클라이언트에서 동적으로 실행되는것이 아니고 빌드시 실행되는 함수인데, SEO 최적화에 필요한 요소들을 구성하는데 필요한 데이터도 포함하여 리턴한다.

***params 데이터 정보***

- `params` : 동적 경로 정보 (getStaticPath와 함께 사용)
- `preview` : [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode) 인경우는 true 가 들어옴(그 외에는 undefined)
- `previewData` : setPreviewData 에 의해 생성된 데이터를 포함함
- `locale` : 활성화된 Locale 정보(활성화 한 경우)
- `locales` : 지원하는 Locale 정보(활성화 한 경우)
- `defaultLocale` : 기본 설정된 Locale 정보(활성화 한 경우)

***return 데이터 정보***

- `props` : 전달할 객체 (JSON.stringfy 를 통해서 직력화 가능해야함)
- `revalidate` : 데이터를 재생성 할 경우 사용(초단위 입력 가능) [참고](https://velog.io/@dldngus5/nextjs-revalidate)
- `notFound` : 데이터가 없는 경우 notFound 화면을 보여줄 수 있음 (boolean)
- `redirect` : 조건 만족시 리다이렉트를 할 수 있음

***getStaticProps 참고***

- [Parameter | Return Object](https://nextjs.org/docs/api-reference/data-fetching/get-static-props)

### getStaticPaths

빌드시 동적 경로가 정적경로로 결정이 되어야 하고, getStaticProps 함수를 통해서 데이터를 받아야 하는데 그 부분을 처리하는 함수이다.(정적인 경로의 페이지는 필요없다.)

```typescript
// pages/blog/[slug].tsx

...

export const getStaticPaths: GetStaticPaths = async () => {
  // 블로그 페이지에 필요한 데이터를 리스트로 받아오기
  const posts = await getPostsByCategoryType(docCategoryType.blog)

  // 동적으로 매핑될 경로 데이터를 타입에 맞게 만들기
  const paths = fpFunction.pipe(
    posts,
    fpArray.map((a) => ({
      params: { slug: a.slug },
    }))
  )

  // 옵션정보를 포함하여 리턴
  return {
    paths,
    fallback: 'blocking',
  }
}

...

```

***return 데이터 정보***

- `paths` : 렌더링할 경로를 결정에 필요한 데이터
- `fallback` : 매치되지 않는 경로 처리 (true | false | 'blocking')

***getStaticPaths 참고***

- [Return Object](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths)

### 검색엔진 최적화(SEO)

빌드시 getStaticProps 를 통해서 받은 정보를 SEO 최적화에 활용한다.\
SEO 컴포넌트를 만들고 페이지에서 동적으로 생성한 데이터를 컴포넌트와 결합하여 빌드할때 HTML 생성시 포함되도록 한다.

Next.js 에서 제공하는 [Head](https://nextjs.org/docs/api-reference/next/head) 태그를 통해서 구현이 가능하지만, [next-seo](https://github.com/garmeeh/next-seo) 모듈을 활용하면 더욱 쉽게 구현이 가능하다.

```typescript
// components/molecules/seo.tsx
// PostSeo 라는 컴포넌트를 만든다.

...
import { ArticleJsonLd, DefaultSeo, NextSeo } from 'next-seo'

export const PostSeo: FC<PostSeoProps> = ({
  title,
  description,
  author,
  uri,
  createdDate,
  updatedDate,
  tags,
  images = [],
}) => {
  return (
    <>
      <NextSeo
        title={`${title} – ${siteConfig.title}`}
        description={description}
        canonical={uri}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: createdDate,
            modifiedTime: updatedDate,
            authors: [`${siteConfig.url}/about`],
            tags,
          },
          url: `${siteConfig.url}${uri}`,
          title,
          description,
        }}
      />
      <ArticleJsonLd
        authorName={author}
        dateModified={createdDate}
        datePublished={updatedDate}
        description={description}
        publisherName={author}
        title={title}
        url={`${siteConfig.url}${uri}`}
        images={images}
        publisherLogo={`${siteConfig.url}/static/logo.png`}
      />
    </>
  )
}

// pages/blog/[slug].tsx
// PostSeo 컴포넌트에 데이터를 결합하여 페이지 컴포넌트를 구성한다.

...

const BlogDetailPage: NextPage<Props> = ({ slug, frontMatter, mdxContent }) => {
  return (
    <>
      <PostSeo
        author={frontMatter.author}
        title={frontMatter.title}
        description={frontMatter.description}
        tags={frontMatter.tags}
        createdDate={frontMatter.createdDate}
        updatedDate={frontMatter.updatedDate}
        uri={`/blog/${slug}`}
      />
      ...
    </>
  )
}

...

```

***Next.js 에서의 SEO 참고***

- [Manage SEO in Next.js with Next SEO](https://blog.logrocket.com/manage-seo-next-js-with-next-seo/)
- [next.js seo 쉽게 적용하기](https://kyounghwan01.github.io/blog/React/next/next-seo)
- [그 밖의 SEO 최적화 참고](https://www.webdevtutor.net/blog/tips-to-improve-seo-for-your-nextjs-app)

### MDX for Markdown

[MDX](https://mdxjs.com/) 는 컴포넌트 기반 웹사이트 제작시 Markdown 을 통합하는데 주로 사용하는 도구이다.\
[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) 라는 모듈을 사용해서 MDX 를 쉽게 사용할 수 있었다.\

1. Markdown 문서를 Json 형태로 변환

```typescript
// utils/markdown.ts

import { serialize } from 'next-mdx-remote/serialize'

export const markdownToHtml = async (markdown: string) => {
  return serialize(markdown, {
    // 변환시 컴파일 옵션
    mdxOptions: {
      format: 'md', // .md 파일만 활용
    },
    // frontmatter 를 가져올건지 여부 => utils/doc.ts 에서 [gray-matter](https://github.com/jonschlinkert/gray-matter) 활용
    parseFrontmatter: false,
  })
}

```

2. Markdown 문서로 부턴 받은 데이터를 Html로 변환 하기 한 컴포넌트 작성

```typescript
// components/organisms/mdx-provider.tsx

...

// Markdown => Html 변환시 사용자 정의 컴포넌트 정의
const MDXComponents = {
  code: MdxCodeBlock,
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  h5: MdxH5,
  p: MdxP,
  a: MdxAnchor,
  li: MdxLi,
  strong: MdxStrong,
}

// Markdown 문서 내용이 렌더링 될 컴포넌트 작성
const MdxProvider: FC<Props> = ({
  slug,
  frontMatter,
  mdxContent,
  className,
  categoryList,
}) => {
  const { docRef, readingTime } = useReadingTime()
  const { docRef: docRefForHashLink, hashLinkElementList } = useHashLink()

  return (
    <div className={`${className} flex-wrap`}>
      <div className="xl:flex xl:flex-row">
        <div className="grow" ref={docRef}>
          <div>
            <div className="mb-5 text-3xl">{frontMatter.title}</div>
            <div className="mb-2 flex flex-col items-end text-tertiary dark:text-darkTertiary">
              <div>
                <span></span> create: {frontMatter.createdDate}
              </div>
              <div>update: {frontMatter.updatedDate}</div>
              <div className="flex items-center">
                <RiTimerLine />
                <div className="ml-2">{readingTime}</div>
              </div>
              <div className="mb-10 flex flex-row">
                {frontMatter.tags !== undefined &&
                  !fpArray.isEmpty(frontMatter.tags) &&
                  fpFunction.pipe(
                    frontMatter.tags,
                    fpArray.mapWithIndex((i, a) => (
                      <span className="flex items-center" key={i}>
                        {i === 0 && <RiPriceTag3Line />}
                        <Tag name={a} href={`/tags/${a}`} className="ml-2" />
                      </span>
                    ))
                  )}
              </div>
            </div>
            <div className="mb-5 border-t-[0.5px] border-solid text-divider dark:text-darkDivider"></div>
          </div>
          <NonSsrWrapper>
            {categoryList !== undefined && !fpArray.isEmpty(categoryList) && (
              <CategoryListPane
                categoryList={categoryList}
                currentTitle={frontMatter.title}
              />
            )}
          </NonSsrWrapper>
          <div className="prose mt-5 min-w-full" ref={docRefForHashLink}>
            <MDXRemote {...mdxContent} components={MDXComponents} />
          </div>
        </div>
        <HashLinkPane
          hashLinkElementList={hashLinkElementList}
          frontMatter={frontMatter}
        />
      </div>
    </div>
  )
}

```

3. `MdxProvider` 컴포넌트 를 활용하여 page 에서 적용

```typescript
// pages/blog/[slug].tsx

...
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import MdxProvider from '@components/organisms/mdx-provider'

...

const BlogDetailPage: NextPage<Props> = ({ slug, frontMatter, mdxContent }) => {
  return (
    <>
      ...
      <MdxProvider
        slug={slug}
        frontMatter={frontMatter}
        mdxContent={mdxContent}
      />
    </>
  )
}

```

개발 관련 내용을 주로 다루다보니 소스코드를 삽입하는 경우가 많다.\
[prism.js](https://prismjs.com/) 라는 소스코드를 보기좋게 표현해주는 도구가 있는데 React.js 에서 사용하기 용이한 도구인 [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) 를 사용하여 구현하였다.

1. `MdxCodeBloc` 커스텀 컴포넌트 정의

```typescript
// components/atoms/mdx-code-block.tsx

...

const MdxCodeBlock = ({
  children,
  className,
}: HTMLProps<HTMLElement>): JSX.Element => {
  ...

  return (
    <Highlight
      {...defaultProps}
      code={children as string}
      theme={theme}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {fpFunction.pipe(
            tokens,
            fpArray.mapWithIndex((i, a) => (
              <div key={i} {...getLineProps({ line: a, key: i })}>
                {fpFunction.pipe(
                  a,
                  fpArray.mapWithIndex((ii, aa) => (
                    <span key={ii} {...getTokenProps({ token: aa, key: ii })} />
                  ))
                )}
              </div>
            ))
          )}
        </pre>
      )}
    </Highlight>
  )
}

...

```

2. `MDXRemote` 컴포넌트의 `components` 프로퍼티에 적용하기 위한 커스텀 컴포넌트 정의

```typescript

// components/organisms/mdx-provider.tsx

...

// Markdown => Html 변환시 사용자 정의 컴포넌트 정의
const MDXComponents = {
  code: MdxCodeBlock,
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  h5: MdxH5,
  p: MdxP,
  a: MdxAnchor,
  li: MdxLi,
  strong: MdxStrong,
}
...
<MDXRemote {...mdxContent} components={MDXComponents} />
...

```

## 마무리

이번 포스트에서는 Next.js 에서 Markdown 기반 정적 웹사이트 블로그 를 만들기 위해서 필요한 큰 줄기를 소개 했다.\
참고해야할 자료가 많지만, 하나하나 구현 하다보니 블로그를 완성해 나갈 수 있었다.\
많은 공부가 되었고, 멈추지 않고 꾸준히 글도 올리고 기능도 고도화 해나가야 겠다.

## 참고

- [What the heck is SSG: Static site generation explained with Next.js](https://dev.to/anshuman_bhardwaj/what-the-heck-is-ssg-static-site-generation-explained-with-nextjs-5cja)
