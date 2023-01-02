---
title: bGlam | mobile-b2c
createdDate: '2019-05-15'
updatedDate: '2019-05-15'
author: sangza
category: project
categoryTitle: bglam
description:
draft: false
---

## 프로젝트 기간

- 2018.09 ~

## 요구사항

- 단일 코드 베이스로 모바일 어플리케이션 제작 및 유지 보수 해야 함
- 성능 이슈를 최소화 해야 함
- 빠른 개발 / 배포 이루어져야 하며, 비지니스 전략에 대응이 기민해야 함
- 사용자 행동 추적을 위한 데이터 베이스를 확보 해야 함
- open API 및 상용 SDK 활용이 용이 해야함
- 단일 앱으로 사용자 구분 하여 로그인 (업주/고객)
- 단일 앱으로 채팅기능 구분 (업주/고객)
- 푸시 기능 (채팅, 티켓 구매/티켓 취소/예약 요청/환불처리)
- 결제시 처리 해야 할 내용: 포인트 적용/쿠폰입력/결제 모듈/예약
- 검색: 통합검색/필터적용/무한스크롤링
- 예약관리: 예약 알림 시스템(push, sms, mail) / 예약취소 / 확정 / 변경

## 기술스택

- react native

  - 개발언어가 javascript 이고 하나의 코드 베이스로 android / ios 개발이 가능하다.
  - live reload 를 통해서 빌드하지 않아도 코드 수정시 즉시 view를 확인할 수 있어서 개발 생산성이 높다.
  - 브릿지를 통해서 네이티브 코드로 변환해주는 시스템으로 webview 를 이용한 하이브리드 앱(cordova) 보다 성능이 좋다.
  - react.js 베이스로 웹 개발시 코드 재사용에 용이하다
  - 최신버전(0.59) 이 1.x 되지 않아서 불안정하지만 비교적 커뮤니티도 큰 편이고 점차 많이 사용되고 있는 흐름이다.

- typescript(tslint)

  - 정적 분석을 통해서 코드 품질을 향상 시키기 위해 사용하였다.

- redux(rematch)

  - 앱 내부에서 데이터를 중앙에서 관리하기 위한 라이브러리 이다.
  - rematch 를 활용한 이유는 기존의 redux 관련 도구(sagas, thunk) 들은
    action, reducer, effect 를 별도로 작성하는 방식인데 rematch 는 하나의 model 객체 안에
    해당 기능들을 모두 담아서 관리하는 방식이라 비교적 코드 관리가 용이할 것이라는 판단으로 사용하게 되었다.
  - typescript 지원이 매끄럽지 않은 부분이 있다. ex) mapDispatch 부분에서 타입 찾지 못한다.

- react navigation

  - tabbar, sidebar, stack 등 페이지 전환에 필요한 기능을 위해 사용한다.

- firebase sdk

  - 메세지 푸쉬 시스템 적용을 위해서 사용하였다.
  - google analytics 적용을 위해서 사용하였다.

- code push

  - 웹하고 달리 모바일은 배포 관리가 비교적 번거롭고 android / ios 규정에 맞춰야 하며
    두 플랫폼을 동일하게 릴리즈 시점 정하기 까다로운 부분이 많다. 이에 보완 하기 위해 사용 되었다.
  - code push 는 javascript 코드 및 정적 리소스 들을 빠르게 배포할 수 있는 라이브러리이다.
  - MS 에서 유지보수를 담당하는 프로젝트기 때문에 비교적 신뢰 할 수 있다.
  - 경험상 네이티브 수준의 코드들은 적용되지 않는 한계가 있다.

- styled component
  - css 코드를 javascript 로 래핑하여 사용할 수 있고, 동적으로 스타일을 적용할 수 있는 장점이 있다.
  - react native style 작성보다는 css 작성이 더 익숙하고 유지보수가 용이 하기 때문에 적용하였다.

## 프로젝트 설계도

하나의 앱에서 고객/업체 기능을 수용해야하기 때문에 `b2c/b2b`로 네임스페이스를 구분하여 작업하였다.

```markdown
b2c-app
├── .circleci : circle ci 설정 파일
├── android : 안드로이드 네이티브 코드
├── ios : IOS 네이티브 코드
├── src
│  ├── b2c : 고객용 앱
│  │ ├── components : stateless 컴포넌트
│  │ │  ├── ShopComponent.b2c.tsx
│  │ │  ├── ...
│  │ ├── containers : stateful 컴포넌트
│  │ │  ├── main
│  │ │  │  ├── MainCategoryContainer.b2c.tsx
│  │ │  │  ├── MainCategoryStyle.b2c.tsx
│  │ │  │  ├── ...
│  │ │  ...
│  │ ├── layouts
│  │ │  ├── partial
│  │ │  │  ├── Header.b2c.tsx
│  │ │  │  ├── ...
│  │ │  ├── BlankLayout.b2c.tsx
│  │ │  ├── ...
│  │ ├── navigators
│  │ │  ├── SwitchNavigator.b2c.tsx
│  │ │  ├── IntroStackNavigator.b2c.tsx
│  │ │  ├── MainBottomTabNavigator.b2c.tsx
│  │ │  ├── ...
│  │ ├── pages
│  │ │  ├── sign-up
│  │ │  │  ├── SignUpTermFormPage.b2c.tsx
│  │ │  │  ├── SignUpTermFormStyle.b2c.tsx
│  │ │  │  ├── SignUpUserInfoFormPage.b2c.tsx
│  │ │  │  ├── ...
│  │ │  ├── ...
│  ├── b2b : 업체용 앱
│  │ ├── ... : (b2c와 동일구조)
│  ├── store : rematch를 이용한 앱 state 저장소
│  │  ├── models : state 모델 정의
│  │  │  ├── b2c
│  │  │  │  ├── domain : 서버에서 받은 원본 domain 데이터
│  │  │  │  │  ├── access-b2c-domain-model.ts
│  │  │  │  │  ├── ...
│  │  │  │  ├── ui : domain 데이터를 가공한 ui용 데이터
│  │  │  │  │  ├── chat-lit-b2c-ui-model.ts
│  │  │  │  │  ├── ...
│  │  │  ├── b2b
│  │  │  │  ├── ... : (b2c와 동일구조)
│  │  │  ├── common
│  │  │  │  ├── ... : (b2c와 동일구조)
│  │  │  ├── helper : model 셋팅시 helper 함수 모음
│  │  │  │  ├── res-helper.ts : 서버 통신 후 response 셋팅 헬퍼
│  │  │  │  ├── ...
│  │  ├── types.tx : 모델에서 사용하는 공통 interface 모음
│  │  └── index.ts : rematch 초기화
│  ├── utils : 공통 유틸 함수 모음
│  │ ├── image-util.ts
│  │ ├── ...
│  └── index.tsx : react native 최초 진입 코드
├── env : dev/test/production에 따른 env 정보
├── static : static 파일
├── .babelrc : es 최신버전 사용을 위한 바벨 적용시
├── package.json : npm 정보
├── tsconfig.json : 타입스크립트 설정
├── tslint.json : 타입스크립트 린트 설정
└── index.js : react native 초기화
```

- `src/components`

  - `props` 를 통해 컴포넌트 내에서 state가 바뀌지 않는 순서 컴포넌트들이 위치한다.

- `src/containers`
  - `rematch` 를 통해 state값이 컴포넌트에 매핑되는 형식의 컴포넌트 들이 위치한다.

```typescript
// 매핑시킬 State를 선언한다.
const mapState = (state: IRematchState) => ({
  $searchConditionUiStates: {
    serviceCategoryTypes: state.$searchConditionUi.serviceCategoryTypes,
  },
})

// 매핑시킬 state 조작 dispatch를 선언한다.
const mapDispatch = (dispatch: IRematchDispatch) => ({
  $serviceCategoryTypesEffects: {
    selectServiceCategoryTypes: () =>
      dispatch.$serviceCategoryTypes.selectServiceCategoryTypes(),
  },
})

// state와 state를 조작하는 dispatch 함수들이 MainCategory 컴포넌트에 매핑된다.
export const MainCategoryCommonContainer = connect(
  mapState,
  mapDispatch
)(MainCategoryCommon)
```

- `src/navigators`

  - `SwitchNavigator` 를 통해, `Stack Navigator` `Bottom Tab Navigator` 등
    다양한 성질의 네비게이터를 전환해가며 컨트롤시키는 구조이다.

- `src/models`

  - state / reducers / effects 로 구성된다.
    - `state` 는 앱의 변수 값들이 저장된다.
    - `reducers` 는 state 값을 변화시키는 함수로 구성된다.
    - `effetcts` 는 비동기 호출(http)이 필요한 함수들이 선언된다.

  ```typescript
  // src/models/common/domain/account-b2c-domain-model.ts
  export const $isAuthToken = createModel({
    state: isAuthTokenState as IIsAuthTokenState,
    reducers: {
      setState: (state, payload) => ({ ...state, ...payload }),
      setInitialState: (state, payload = isAuthTokenState) => payload,
    } as IIsAuthTokenReducers,
    // 비동기 호출(http)이 필요한 경우 effects를 활용한다.
    effects: {
      async getIsAuthToken() {
        // isLoading 값을 두어, 로딩바를 컨트롤 한다.
        this.setState({ res: { isLoading: true } })
        const res = await axios.post('/common/access/auth-token/is-auth-token')

        if (res.status === 200) {
          this.setState({
            isAuthToken: res.data.isAuthToken,
            // successRes라는 helper 함수를 통해, 균일한 response값을 만든다.
            res: successRes(res),
          })
          // 성공여부 및 http status 값을 리턴한다.
          return successReturn()
        } else {
          this.setState({
            isAuthToken: res.data.isAuthToken,
            res: failRes(res),
          })
          return failReturn(res)
        }
      },
    } as IIsAuthTokenEffects,
  })
  ```

## 주요 논의 사항

### 리액트 네이티브

react native 를 사용하면서 이 플랫폼을 계속 사용하는 것이 좋을까 하는 고민이 되었다.
처음 기대했던 것은 javascript 를 활용해서 앱을 개발할 수 있는 장점이 있지만 코어 기능을 개발 해나가면서
결국 android / ios 코드를 분석하고 작성할 수 있어야 좀 더 확실하게 다룰 수 있겠다는 생각을 하게 되었다.
버전도 1.x 대로 업그레이드가 언제 될지 알수 없고, 생태계를 탄탄하게 지켜주었던 airbnb 팀도
react native 에서 손을 떼게 된 것도 있다.
npm 모듈 생태계는 수많은 유용한 모듈이 존재하는 장점이 있는 반면에 파편화 되어 있어서 서로 호환성을
원활히 유지 되도록 개발자가 많은 조율이 필요하다. react native 는 파편화 + 네이티브 환경 까지 더해져서
빌드 오류를 만나는 경험이 많은 편이다.
'이렇게 개발할거면 네이티브 공부하는게 낫겠다' 하는 생각이 자주 들었다.
그만큼 문제 해결을 위해 모듈들은 더욱 깊게 공부하게 되는 것은 장점인 것 같다.

### 비동기 처리

프론트엔드 영역에서 성능을 크게 좌우 하는것은 비동기 처리에 대한 기민함이다.
리액트 커뮤니티에서 권장하는 대로 dom 이 생성된 이후에 비동기 처리를 하는 방향으로 로직을 작성했다.

### 모델 설계

데이터가 다양해지고 복잡해짐에 따라 모델 설계를 효과적으로 할 필요가 생긴다.
비글램 서비스는 채팅, 결제, 검색등 데이터의 복잡도가 꽤 높은 편이라 처음부터 잘 설계할 필요가 있었다.
UI, domain 데이터 타입을 분리하고 각각의 역할에 맞도록 활용되도록 설계 한다.
깊은 복사가 자주 이뤄지면 성능이 저하되는 경우가 있어서 되도록이면 object 레벨을 낮은 상태로 유지하도록 한다.

### 화면 전환

화면 전환 설계에 대한 부분은 tab navigator 와 stack navigator 를 활용하여
메인 화면에서는 tab, 화면의 deps 가 깊어지는 경우에는 stack navigator 를 활용하였다

### 채팅

채팅은 실시간 비동기 통신이 이루어지고 있어서 앱의 상태에 많은 영향을 미친다. side effect 를 최소화하는
코드를 작성하도록 한다. 그리고 테스트의 양이 많고 범위가 넓기 때문에 꼼꼼히 테스트를 기반으로 하는 작업이
필수 였으나 시간문제 때문에 테스트 중심으로 작업을 하지 못한 점이 아쉽다.

## 주요 기능

_비글램 b2c App 시연영상_

[![시연영상](https://i.postimg.cc/Prmr01r4/image.png)](http://www.youtube.com/watch?v=M_faTTDGKUI 'bGlam b2c app')

- 일반/카카오 로그인
  - JWT 토큰 인증방식으로 로그인 기능 구현
  - 포커스 아웃시, validation 되도록 작업

<img src='https://i.postimg.cc/PxMXq93x/login.png' width="200" border='0' alt='login'/>

- 검색페이지
  - elasticsearch 를 통한 통합검색
  - infinite scrolling/lazy loading
  - 가격/필터 검색 기능
  - 서비스별/업체별/지도 검색 기능

<img src="https://i.postimg.cc/0NxhNQLY/search.png" width="200" />

- 채팅
  - chatkit 을 활용한 채팅 리스트/내역
  - 새 채팅 도착 알림
  - 온/오프라인 여부, 채팅입력중 여부, 읽음 여부 체크 기능
  - 채팅 내 관심상품/구매한 상품 리스팅
  - 채팅 내 서비스 예약기능

<img src="https://i.postimg.cc/C15PZfJq/chat.png" width="200" />

- 결제과정

  - iamport 모듈 통한 결제 연동
  - 티켓 개수 변경
  - 쿠폰입력, 포인트 사용 기능

  <img src="https://i.postimg.cc/VvbKgQxs/pay-1.png" width="200" />

- 구매내역
  - 사용가능/사용완료/환불요청/환불 완료 탭
  - 업체 및 고객센터 채팅 문의

<img src="https://i.postimg.cc/sgyRMwWG/paymented.png" width="200" />

- 업체 티켓 관리
  - 구매내역/사용예정/사용완료/정산내역 탭
  - 예약하기
  - 고객과 채팅 기능
  - 완료 처리

<img src="https://i.postimg.cc/8zHgMMdK/works-ticket.png" width="200" />

## 향후 발전 방향

- 테스트 코드를 작성하여 런타임 오류 최소화
- 로그인 하지 않아도 앱 내부를 탐색할 수 있도록 개선
- 중복되는 데이터가 있는데 모델 구조 개선을 통해서 모델 구조를 단순하게 만들기
- redux-persist 를 활용하여 보안 문제가 없는 데이터는 로컬 스토리지에 캐시 할 수 있도록 하기
- Oauth2.0 표준에 적합하도록 카톡 로그인 개선
- 시간 문제상 채팅 SDK 함수들의 비효율적인 코드 생산에 대한 개선
- 사용자 행동 분석, 빅 데이터 분석을 통해서 개인맞춤 페이지 추가
- 일반사용자 <-> 업체사용자간 소통이 더 밀접해질 수 있도록 채팅 시스템 개선
- 사용자 커뮤니티 활성화를 위해서 리뷰 및 QnA등 시스템 마련
