# 📚 Inflearn-Clone-Frontend

## 📖 개요(Summary)

인프런 웹앱을 만들어보는 팀프로젝트

[Inflearn-clone-back repository](https://github.com/Ark-inflearn/inflearn-clone-back)

---

<br />

## 🎯 목표(Objectives)

- 팀프로젝트 및 협업 경험
- Hard skill 및 Soft skill 향상

---

<br />

## 📆 개발기간(Develop period)

2021.07.05 ~ 진행중

---

<br />

## 💻 라이브러리 및 기술 스택(Library & Stack)

- Language : Typescript
- Library : Reactjs
- Server : Nextjs
- Style : Meterial-UI & Styled-components

---

<br />

## 📑 할 일 (Things to do)

- [x] 프론트엔드 세팅 : Typescript, Layout ...
- [ ] 메인 페이지
- [ ] 회원가입 페이지
- [ ] Header, Footer layout

---

<br />

## ✨ 주요 기능

- 반응형 웹 페이지
- SSR

---

<br />

## 📗 작업 내용

<details>
<summary>2021.07.08(NOAH))</summary>

github repository 생성

- collaborator 초대
- branch protect rule 설정

</details>

<details>
<summary>2021.07.09(NOAH))</summary>

Readme 작성
react-hook-form 적용

참고문헌

- [nextjs, typescript, meterial-ui and jest set-up](https://documentationnerds.com/blog/tech/setup-next-frontend-with-typescript-eslint-prettier-jest-and-react-testing-library)
</details>

<details>
<summary>2021.07.10(Tony)</summary>

### npm run dev 실행 안됨

- [x] next와 next dev의 차이는 ?

  - [What is the difference between next (dev) and next build && next start ?](https://github.com/vercel/next.js/discussions/15053)
  - 같다

- [x] cross-env NODE_OPTIONS='--inspect' next dev는 실행이 안된다.
  - NODE_OPTIONS='--inspect' 이것 때문에 안됨
    - NODE_OPTIONS=inspect 으로 수정하면 실행 됨
    - NODE_OPTIONS 이란 환경변수가 왜 필요한지 잘 모르겠음

### dir 배치 수정

- [x] src 안에 들어가야 할 것은 ?
  - https://nextjs.org/docs/advanced-features/src-directory
  - 앱을 실행하는데 필요한 내가 작성한 소스코드

### 레이아웃 및 컴포넌트 수정([Semantic tag](https://velog.io/@ru_bryunak/HTML-%EA%B8%B0%EC%B4%88-2-%EC%8B%9C%EB%A7%A8%ED%8B%B1-%ED%83%9C%EA%B7%B8%EB%9E%80#:~:text=2%2F8-,%EC%8B%9C%EB%A7%A8%ED%8B%B1%20%ED%83%9C%EA%B7%B8%EB%9E%80%3F,%EC%9D%B4%20%EC%8B%A4%ED%98%84%EB%90%A0%20%EC%88%98%20%EC%9E%88%EB%8B%A4.))

- [x] nav 태그를 div에서 nav로 변경, nav를 header로 감싸줌

  - inflearn 공홈에서 개발자 도구로 태그를 확인하여 똑같이 만들어 줌

- [ ] pages dir 안에 \_document, \_app, index 등 next에서 제안하는 페이지 구성방식 확인 후 정리
  - \_document :
  - \_app :
  - index :

### 기타 설정파일 확인

- [ ] tsconfig.json 에서 include 부분 다시 확인하기

</details>

<details>
<summary>2021.07.11(Tony)</summary>

- [x] header, footer 윤곽만 잡기

### home page

- [ ] slider 공간만 만들기
- [x] 검색창 모양만 만들기
- [ ] 강의 카드 컴포넌트 만들기
  - li.lecture\_\_card{card$}\*10
  - [emmet을 통해 효율적으로 작성](https://webruden.tistory.com/77)

```html
<li className="lecture__card">card1</li>
<li className="lecture__card">card2</li>
<li className="lecture__card">card3</li>
<li className="lecture__card">card4</li>
<li className="lecture__card">card5</li>
<li className="lecture__card">card6</li>
<li className="lecture__card">card7</li>
<li className="lecture__card">card8</li>
<li className="lecture__card">card9</li>
<li className="lecture__card">card10</li>
```

</details>

<details>
<summary>2021.07.12(Tony)</summary>

### Things to do

- [x] 강의 카드 컴포넌트 만들기
- [x] 더미 데이터(json)으로 강의 컴포넌트 home에 띄우기
  - [ ] 실제로 api로 받아오는 과정 알아보기
- [ ] media query 로 반응형 화면 만들 때 스크린 사이즈 나누는 구간 알아보기
- [x] slider 공간만 만들기
- [ ] search안의 title 문구 매일 바뀌게 하기

### home page

- html 원달러 표시 : `&#8361;`
- 천단위 콤마 : [정규식 이용](https://hianna.tistory.com/441)

### 참고 문헌

- [html에 원달러 표시 대신 reverse solidus 나올 때](https://sqlplus.tistory.com/entry/html-%EC%86%8C%EC%8A%A4%EC%97%90-%EC%9B%90%ED%99%94%ED%86%B5%ED%99%94%ED%91%9C%EC%8B%9C%EB%A5%BC-%ED%95%A0%EB%95%8C-%EC%97%AD%EC%8A%AC%EB%A0%88%EC%89%AC%EB%A1%9C-%EB%82%98%EC%98%AC%EB%95%8C-%EC%B2%98%EB%A6%AC%EB%B0%A9%EB%B2%95)

</details>

<details>
<summary>2021.07.17(Tony)</summary>

### tsconfig.json 속성

- [컴파일러 옵션 설정](https://typescript-kr.github.io/pages/compiler-options.html)

- include, exclude 속성은 glob과 유사한 파일 패턴 목록을 가짐

  - \*: 모든 문자(디렉토리 구분기호 제외)
  - ?: 한 문자와 매칭(디렉토리 구분기호 제외)
  - \*\*/ : 반복적으로 모든 하위 디렉토리와 매칭
  - "src/\*/\*\*" : src 안의 모든 하위 디렉토리 + 지원하는 확장자(ex. .ts, .tsx, .d.ts)
    - allowJs가 true(true로 설정 해놓은 상태)이면 .js와 .jsx 도 포함

- [ ] next에서 typescript return type, prop type 알아보기
  - [x] type vs interface
    - interface로 표현할 수 없는 형태가 아니면 interface를 이용하자
  - [ ] next에서 return type, prop type을 어떻게 지정하는게 좋은지 알아보기

### 참고 문헌

- [typescript-kr, tsconfig.json](https://typescript-kr.github.io/pages/tsconfig.json.html)
- [type vs interface가 더 낫다](https://yceffort.kr/2021/03/typescript-interface-vs-type)
- [type과 interface 차이](https://medium.com/@alexsung/typescript-type%EA%B3%BC-interface-%EC%B0%A8%EC%9D%B4-86666e3e90c)

</details>

<details>
<summary>2021.07.23(Tony)</summary>

## Issue #9 : AppLayout 구조 적용

### \_document, \_app, index 우선순위 파악

- \_document.js는 시작점 : HTML Document
- \_app.js : 공통의 레이아웃 작성
- index.js : "/"로 시작되는 경로
- \_error.js : Error page : 아직 잘 모름

참고 문헌

- [개인블로그 : next.js 구조](https://salgum1114.github.io/nextjs/2019-05-06-nextjs-static-website-1/)

document > app > index 순으로 내려와서 index에 본격적으로 만들면 될 것 같다

- 현재 AppLayout 이라는 공통 component를 만들어서 header와 footer가 필요한 곳이면 사용 할 수 있게 함

### styled component 설치

- npm i styled-components
- noah님하고 상의하고 웬만하면 .css파일을 작성하지 않는 방향으로 진행해볼 예정

typescript는 입력이 예상되는 props에 대한 type검사는 할 수 있겠지만
react에서 어떻게 써야되는지는 알아볼 필요가 있음

</details>

<details>
<summary>2021.07.24(Tony)</summary>

### 작업내용

- MainSlider 컴포넌트 추가
  - react-slick 라이브러리 사용

### 향후 계획

#### style

- [ ] .CSS 파일 styled component로 변경할 예정
- [ ] CSS style 관련 공통으로 사용하는 색상 등에 대한 상수값을 모아놓은 파일 생성

#### slider 기능 추가 및 수정

- [ ] 향후 배경색을 이미지와 같게하는 방법에 대해 생각해보고 변경
- [ ] 해당 슬라이드로 이동하는 버튼 추가
- [ ] 모바일 화면에 슬라이더 모양 변화하도록 수정
- [ ] 슬라이더에 링크 추가

#### 리덕스 및 사가 설정

</details>

<details>
<summary>2021.08.03(NOAH)</summary>

### 작업내용

- signup page 작성
  - Material-UI( CSS)
    - TextField: input과 같은 역할을 함
    - Typography: div와 같은 역할
    - Grid: Grid를 사용하여 Flex나 Grid와 같은 디자인을 쉽게 구현
    - IconButton: Material에서 제공하는 icon을 button으로 사용하게 해줌
    - styles.ts: custom css파일, className으로 변수값을 넘기면 custom 디자인이 적용됨
  - react-hook-form( form)
  - yup( signup rule)

### 향후 계획

#### style

- [x] SNS 로그인 디자인

#### 회원가입 rule

- [x] yup을 사용하여 회원가입 rule 설정
- [x] rule에 맞지 않은 경우 error 메시지 출력
- [ ] 이용약관, 개인정보취급방침 페이지 생성

</details>

<details>
<summary>2021.08.01~2, 5, 7, 8(Tony)</summary>

## Redux setting

### 1. 설치 모듈

#### npm install redux next-redux-wrapper react-redux --save

- redux
- next-redux-wrapper
  - Next.js의 서버사이드 렌더링 관련 복잡한 설정을 쉽게 해주는 HOC
- react-redux
  - react 바인딩

#### npm install -d redux-devtools-extension @types/next-redux-wrapper @types/react-redux

- redux-devtools-extension : 개발자 도구 사용을 위한 라이브러리

#### npm install redux-saga

- redux-saga는 type을 자체적으로 지원하기 때문에 @type/redux-saga는 필요 없음(deprecated 됨)

#### npm i immer

- 알아서 불변성을 지켜주는 라이브러리

#### npm i faker shortid

- npm i --save-dev @types/faker
- npm i --save-dev @types/shortid

- dummy data test를 동적으로 하기 위해 faker와 shortid를 설치

#### npm i axios

- saga에서 사용, 비동기 http통신(Promise based HTTP client for the browser and node.js)

#### npm i -S @redux-saga/core

- eslint가 지적해줘서 설치함

### 2. redux tree

redux

- reducers
  - index
  - user
  - lecture
  - types
- sagas
  - index
  - user
  - lecture
- configureStore

#### 2-1. commonState class 삭제

- loading, done, error의 반복되는 타이핑을 피하려고 했으나 done을 제거하고 loading, error만 사용하면 없는게 더 직관적이라서 없는게 낫다고 판단 함
- data도 class member 변수로 있었으나 막상 사용해보니 class 내 멤버변수에 있을 필요가 없었음

### 3. 기타

#### 리덕스 설치 및 세팅 중

- [x] State type 정의 해야 됨
- [x] User, Lecture - reducer, saga 설계
  - lecture만 샘플로 생성

#### eslint rule 중 'no-param-reassign': 'off' => immer 사용을 위해

#### main(home) page redux 동작 흐름

- 처음 화면을 불러올 때 LOAD_REQUEST action을 시작으로 데이터(Lecture card)를 불러 옴
- add 버튼을 누를 때마다 데이터가(Lecture card) 추가 됨
- 지금은 더미 데이터로 불러 오지만 api를 요청할 경우 request에서 호출 하는 부분만 추가하면 됨

#### 별점 표시 방식

- 소수점 둘 째 자리에서 반올림 후 소수점 첫 째 자리 저장
- n.2 ~ n.8 까진 별 반개(3.2~3.8은 3개 반)
- n.1 점까진 버림(3.1은 별 3개로 표시)
- n.9 점은 올림(3.9는 별 4개로 표시 됨)

### 4. 참고 문헌

- https://jktech.tistory.com/46
- 인프런 노드버드 강의
- https://medium.com/@raphat/next-js-typescript-redux-3fbc990cb901
- [next-redux-wrapper 공식문서](https://github.com/kirill-konshin/next-redux-wrapper)
- [RootState](https://stackoverflow.com/questions/60777859/ts2339-property-tsreducer-does-not-exist-on-type-defaultrootstate)

### 5. 프론트 회의 안건

- [ ] 타입 저장 위치 : interface나 type을 해당 파일에 놓을 것인지 따로 파일을 만들어서 정리를 할 것 인지
- [ ] 리덕스가 전체 강의 로드하는 부분을 샘플로 만들었는데 자신이 만들 UI관련 리덕스는 직접 만드는 것이 좋을 것 같음
- [ ] 관리자 페이지를 만들어야 하나..? slider 배경색은 DB에서 가져와야 될 것 같은데 이걸 매번 백엔드 개발자가 저장하는 것 보다 관리자페이지가 있으면 좋을 것 같음
  - 우선순위 낮음

</details>

<details>
<summary>2021.08.10(Tony)</summary>

슬라이더 리덕스 연결
slider 하나 때문에 reducer와 saga에 파일을 하나씩 만들기 번거로워서
lecture파일에 합쳐서 작업했습니다.

</details>

<details>
<summary>2021.08.10(NOAH)</summary>

### 작업내용

- signup page error case
  - Material-UI( CSS)
    - useStyle: material-ui에 직접 className으로 스타일을 적용하기 위한 hook, 적용하고자하는 속성을 객체로 생성하고 적용
    - createTheme: meterial-ui에서 이미 디자인된 속성들을 변경하고 싶은 경우 사용, ex) 색상, 크기, 패딩.. 등
  - react-hook-form( form)
    - Controller: material-ui와 같은 라이브러리를 연동하기 위한 wrapper
    - useFormContext: 중첩 된 구조에서 데이터를 전달하고자 할 때 사용, ex) 특정 form을 component로 빼서 관리하고 react-hook-form을 적용하는 경우
    - FormProvider: userFormContext가 적용하고자 하는곳의 wrapper
    - useForm: react-hook-form 기본 hook
  - yup( signup rule)
    - error 핸들시 schema 객체에 에러 핸들을 하고자하는 사항들을 정리하고 react-hook-form의 formState의 error에서 받아서 사용, ex) errors.email?.message
    - yup을 태그에 적용할때 태그 name과 yup에서의 정의 이름을 같게 해야 적용이 됨, ex) name: email / email: yup.string().min(10).max(30)....
    - matches: 정규표현식을 사용하기 위한 method
    - oneOf([yup.ref('email'), null]: 다른 input과 값이 일치하는지 여부를 확인하고자 할 때 사용
    - error 객체의 경우 submit하고 나서 적용 됨
    - 현재 정규표현식의 에러 핸들은 errors 객체의 message method를 확인하여 일치하는 방식으로 적용

### 오류해결

- Warning: Failed prop type: Invalid prop `error` of type `object` supplied to `ForwardRef(TextField)`, expected `boolean`
  - TextField 태그의 error에는 boolean값만 가능한데 yup에서의 에러 메시지는 문자열이 생성되기 때문에 문제가 되는 현상
    - error 태그에 !!를 두번 넣어 boolean 변수로 만들어주면 됨, ex) !!error.password

### 향후 계획

- Redux와 연결
- 로그인 모달 구현
- 공통 레이아웃 구현

#### 회원가입 rule

- [x] yup을 사용하여 회원가입 rule 설정
- [x] rule에 맞지 않은 경우 error 메시지 출력
- [ ] 이용약관, 개인정보취급방침 페이지 생성

</details>

<details>
<summary>2021.08.12(Tony)</summary>

### 메인페이지 리스트에 로딩 스피너 추가

- 서버사이드 렌더링이기 때문에 필요 없을 것 같기도 함
- 재미로 추가 해봄

### 메인페이지 강의 리스트

- 마우스 호버 시 나오는 description 추가
- [ ] 장바구니, 좋아요 등 아이콘에 설명 라벨 추가 해야 함
- [ ] 카드 전체적으로 크기 키워야 함

### 기타

- 컴포넌트 파일명 첫글자 대문자로 변경(노아님 요청사항)

### 참고문헌

- [react onHover event handling](https://upmostly.com/tutorials/react-onhover-event-handling-with-examples)

</details>

<details>
<summary>2021.08.13(Noah)</summary>

### Update Nextjs version 11

- Conformance
  - `npx next lint` 명령어를 치면 현재 app의 ESLint를 전체적으로 수행해서 메시지로 CLI에 보여줌
- Improved Performance
  - 11버전 업데이트를 하며 app을 열고 startup time을 24%이상 감소시키고 React refresh 관련하여 프로세싱 타임을 40%이상 감소시킴
  - Babel 관련 startup time 감소
  - 새로운 Babel loader 구축
  - 로딩, 메모리 캐싱과 관련하여 최적화
  - 개발자가 실제로 할 것은 없고 update만으로 이미 적용이 되는 사항
- Script Optimization

  - `next/script`
  - 웹사이트에 다른곳에서 가져와서 사용하는 기능들을 추가할때 라이브러리가 무겁거나 최적화의 문제가 있는데 이것을 Nextjs의 Script 태그가 해결해줌( polyfill, widgets 등)
  - Script 태그에 strategy 속성을 추가하면 자동적으로 최적화 및 성능 향상
    - third party 라이브러리의 실행 순서를 입맛에 맞게 설정 할 수 있음
    - beforeInteractive, afterInteractive( default), lazyOnload 속성

- Image Improvements
  - `next/image`
  - Image 로딩과 관련하여 성능 개선
    - Nextjs의 Image 태그를 사용하면 정적이미지의 가로/세로 크기를 자동으로 정의해줌
    - 인터넷이 느린 사용자를 위하여 blur 이미지를 Nextjs에서 태그 속성으로 제공
- Webpack 5
  - `next.config.js`
  - 웹팩5와 관련하여 다양한 특징 및 개선점들이 구축됨
- Create React App Migration (Experimental)
  - 새로운 툴 `@next/codemod` 개발
  - Create React App을 자동적으로 Nextjs로 변경해주는 툴
- Next.js Live (Preview Release)
  - 협업을 위한 기능
  - 웹사이트를 띄워놓은 상태에서 라이브로 마우스로 공간을 지정 할 수 있고 실시간 채팅도 가능한 기능

### 참고문헌

- [Nextjs docs](https://nextjs.org/blog/next-11#upgrade-guide)
- [Conformance](https://web.dev/introducing-aurora/)
- [Script](https://github.com/vercel/next.js/discussions/24938)
- [Script](https://docs.google.com/document/u/0/d/1ZEi-XXhpajrnq8oqs5SiW-CXR3jMc20jWIzN5QRy1QA/mobilebasic#)
- [Image](https://vercel.com/blog/core-web-vitals#cumulative-layout-shift)
- [Image](https://nextjs.org/docs/basic-features/image-optimization)
- [Webpack](https://nextjs.org/docs/messages/webpack5)

</details>

<details>
<summary>2021.08.14(Tony)</summary>

### 작업 내용

- 강의 카드 마우스 오버 할 때 나오는 설명 밑 아이콘 3개에 말풍선 추가
- lectureCard 폴더를 만들어서 components폴더 정리
- node notifier가 자동으로 설치됨(업데이트 하려고 npm i 하니 설치 됨)
  - cross platform(windows, mac, linux)에서 알람을 띄울 수 있는 모듈

### 참고문헌

- [CSS로 말풍선 만들기](https://ungdoli0916.tistory.com/753)

</details>

<details>
<summary>2021.08.16(Tony)</summary>

### 작업 내용

- AppLayout, CourseLayout을 components 폴더에서 layouts (신규)폴더로 이동
- [ ] create course 페이지에서 제목 입력 후 강의 만들기를 누르면 수정 페이지로 이동
- 강의 생성 후 id를 저장할 필요는 없을 것 같아서 리덕스를 사용하지 않음
  - 어떻게 하는게 좋을지 토론 필요

```typescript
const inputTitle = useRef<HTMLInputElement>(null);
```

- 초기값에 null을 박아줘야 된다. -> HTMLInputElement | null

#### next에서 redirect

```typescript
import { useRouter } from 'next/dist/client/router';
const router = useRouter();
router.push(`/course/${id}/edit/course_info`);
```

### 로컬 서버 세팅

```typescript
// app.ts or index.ts
app.use(
  cors({
    origin: true,
    // credentials: false
  })
);
app.use(express.json()); // front에서 json형태의 data를 보낼때 그것을 req.body에 넣어줌
app.use(express.urlencoded({ extended: true })); // form&submit을 하면 url encoded방식으로 data가 넘어오는데 그것을 req.body에 넣어줌

app.use('/create_course', lectureRouter);
```

```typescript
// lectureRouter
import * as express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  console.log('body', req.body);
  res.json({ id: 1234, result: 'ok' });
});

export default router;
```

### 나중에 추가해야 될 부분

- `/course/${id}/edit/course_info`으로 이동 시 내 강의가 아닌 곳으로 이동할 경우 404 띄워줘야 함
  - 유저가 GET방식으로 접속을 시도 할 때 서버에서 검증 후 수정페이지를 보여줄지 말지 결정

</details>

<details>
<summary>2021.08.19(Tony)</summary>

### create_course page

- create_course에서 강의 만들기 누르면 `/course/1/edit/course_info`로 이동하게 함
  - 나중에 서버 붙일 땐 주석 해제하면 됨
- 제목 없는 경우 alert 대신 경고 메세지가 뜨도록 함

### create_course -> edit 강의 제목 넘기기

- 리덕스 사용
- 기존 axios만 사용하던 것을 redux를 이용하도록 변경
  - saga effect의 put은 dispatch랑 비슷함

### saga call type

- `Generator<T, TReturn, TNext>`
- [x] generator function에서 type 지정하는 법 알아보기
  - https://github.com/microsoft/TypeScript/issues/26959

### test.css 파일 생성

- styled component 에서 자동완성을 잘 지원하지 않으므로 css파일을 테스트목적으로 만들음

### create course btn에 로딩 적용

- 로딩 시간 동안 클릭 방지(pointer-events), 투명도 변경(opacity)

### 참고문헌

- [styled component props](https://styled-components.com/docs/basics)
- [css prevent mouse click](https://stackoverflow.com/questions/44719980/how-to-prevent-the-click-event-using-css)
- [css pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
- [typescript styled components with props](https://stackoverflow.com/questions/47077210/using-styled-components-with-props-and-typescript)

</details>

<details>
<summary>2021.08.20(Tony)</summary>

### Things to do

- [x] create-course에서 store에 저장한 title 가져오기
- [ ] edit course info 앱 레이아웃 수정

</details>
<details>
<summary>2021.08.20, 21(Tony)</summary>

### 수정사항

- children에 type 적용
- header, footer 이름을 HeaderLayout, FooterLayout으로 변경( Next에 존재하는 이름이기 때문에 겹침)
- 컴포넌트의 재사용성을 위해서 기존 styles를 지우고 컴포넌트로 이동

### styled(Link) 안됨

```typescript
const SeeTheLecture = styled.button`
  font-weight: 800;
  width: 160px;
  height: 48px;
  font-size: 18px;
  border-radius: 3px;
  border: 0;
  background-color: #fff;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.375em - 1px) 0.75em;
  text-align: center;
  white-space: nowrap;
`;

<Link href={`/course/${id}`}>
  <SeeTheLecture>강의보기</SeeTheLecture>
</Link>;
```

- Link안에 button태그 넣는 방식으로 스타일링 적용

  - a태그로 하려 했으나 width가 적용이 안됨

- [ ] 강의 제작 column에 해당 페이지 일 때 글자 색 변화
  - course_info 페이지 -> 강의 정보 글자 색 진하게

</details>
<details>
<summary>2021.08.22(NOAH)</summary>

### Things to do

- [ ] 버튼에 스타일 적용
- [ ] responsive 화면 구성

### 수정사항

- 회원가입 페이지 및 컴포넌트 리팩토링
- useStyles 구조분해

```typescript
const { classname } = useStyles();
```

### 적용사항

- Header 구현
  - AppBar : 네비게이션 컨테이너
  - ToolBar : 안에 컨텐츠를 넣으면 Flex와 같이 자동정렬
- 적용해야 할 버튼을 headerData로 하여 추가
  - 추 후 변경이 있을때 쉽게 적용하기 위함

### 문제사항

- nextjs에서 html,body 태그가 전체화면이 되지 않아 \_app.tsx에 아래 스타일을 적용하였으나 메인페이지에서 적용되지 않는 현상
  - html이 전체 보이는 화면의 크기가 아니기 때문에 sticky가 중간에 짤림

```typescript
<style global jsx>
  {`
    html,
    body,
    body > div:first-child,
    div#__next,
    div#__next > div {
      height: 100%;
    }
  `}
</style>
```

</details>

<details>
<summary>2021.08.22, 23(Tony)</summary>

- [ ] edit course layout
  - [x] column sticky
  - [x] 현재 페이지에 해당하는 부분 글자 진하게
  - [ ] modal : 눈길을 끄는 제목 작성 꿀팁
  - [ ] 페이지 로드 시 관련 데이터 가져와서 필수 조건 작성된 페이지는 초록색으로 v 표시
- [ ] course_info 페이지 구성

### CourseLayout.tsx

CourseHeaderContainer height + CourseLayoutGrid padding top(24px) + CourseNav padding top(0.75rem == 12px) 의 높이에 sticky

- StepContainer의 headerHeight prop에 바로 넣어 주면 CourseHeaderContainer height가 측정되지 않은 상태(undefined)로 계산이 되서 sticky의 top에 NaN이 들어감(sticky 적용 안됨)
- 페이지 로드할 때 useState의 headerHeight에 값을 넣어서 나중에 계산된 height값이 반영 되도록 함

### create_course.tsx

- 강의 id를 전달 받고 saga에서 직접 redirect시키도록 함(뒤로가기 안되는 문제 해결)

</details>

<details>
<summary>2021.08.24(Tony)</summary>

### create_course

- 강의 만들기 버튼을 누르지 않고 input text에서 제목 입력 후 엔터로도 강의 생성되도록 변경

### CourseLayout

- window.location.pathname에서 강의 생성후 수정페이지로 넘어갈 때 window객체를 인식하지 못해서 useRouter를 사용해서 현재 경로를 추적하도록 함

### 데이터 로드해서 넣어야 함

- [ ] 미리 저장했던 데이터 불러와서 데이터 로드해서 넣어야 함

</details>

<details>
<summary>2021.08.25(Tony)</summary>

### 카테고리 버튼 중 다른 카테고리 선택하면 현재 선택된 카테고리 색상 원래대로 돌리기

- 사용하는 곳에서 useState로 변수 하나 만들고 그것을 prop으로 전달

```typescript
// course_info.tsx
const [selectedId, setSelectedId] = useState<string>('');

<CourseCommonButton id="1" text="개발, 프로그래밍" selectedId={selectedId} setSelectedId={setSelectedId} />;
```

- 버튼 컴포넌트의 onClick에서 버튼 클릭한 것에 대한 정보(id)를 저장
- 버튼 컴포넌트 안의 useEffect에서 그것과 일치하는지 여부에 따라 true/false를 styled component에 전달

```typescript
// CourseCommonButton.tsx
const CourseCommonButton = ({ id, text, selectedId, setSelectedId }: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  function onClickButton() {
    setSelectedId(id);
  }

  useEffect(() => {
    if (id === selectedId) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedId]);

  return (
    <CourseCommonButtonStyle onClick={onClickButton} key={id} isSelected={isSelected}>
      {text}
    </CourseCommonButtonStyle>
  );
};
```

### 추가 하기 버튼 누르면 add components dynamically

- 리덕스에서 state(array)를 가져와서 추가해야 될 것 같다

#### 예상 데이터 구성

```typescript
data : {
  createLecture : {
    courseInfo : {
      title: string, // 강의 제목
      whatYouCanLearn: string[], // 이런걸 배울 수 있어요
      expectedStudents: string[], // 이런 분들에게 추천해요
      requiredKnowledge: string[], // 선수지식
      category: { // 카테고리
        id: string,
        name: string,
      },
      level: string // 강의 수준
    }
    // 상세소개, 커리큘럼, 커버이미지 정보는 나중에
  },
  setting : {
    // 강의설정
    // 지식공유자 설정
  }
}
```

### 참고 문헌

- [dynamically-add-child-components-in-react](https://stackoverflow.com/questions/36651583/dynamically-add-child-components-in-react)

</details>

<details>
<summary>2021.08.27(NOAH)</summary>

### HeaderLayout

- 메뉴바 포지션 수정

  - 메뉴바가 평소에는 relative였다가 메뉴바 크기만큼 내려올 경우 sticky로 바뀌도록 수정
  - scroll 이벤트가 너무 자주 불리기 때문에 lodash 라이브러리의 throttle 기능을 사용하여 0.3초에 한 번만 불리도록 구현

```typescript
const throttledScroll = useMemo(
  () =>
    throttle(() => {
      if (window.scrollY > 64) {
        setIsNavOn(true);
        return;
      }
      setIsNavOn(false);
    }, 300),
  []
);
```

- 모바일용 메뉴바
  - 인프런 페이지와 같이 모바일 화면( 1025px)이하로 내려갈 경우 Layout이 변경되도록 구현
  - 메뉴를 팝업으로 띄워지도록 함

### HeaderLayout 구현해야 할 것

- 로그인 모달창
- 검색창 기능
- 메뉴 팝업 기능
- 모바일 메뉴 팝업 스타일링

### 추 후 확인

- 일단 레이아웃이 되도록 CSS를 덕지덕지 붙여놨는데 효율적으로 할 수 있도록 검토해야 함

</details>

<details>
<summary>2021.08.27(Tony)</summary>

### 강의생성 후 window api로 페이지 이동시 데이터 날라가는 문제

- window.location.href 를 사용하면 페이지가 새로고침되면서 자바스크립트(리덕스 스토어)에 있는 모든 데이터가 날라감

- react나 next에서 제공하는 router를 saga에서 사용해야 되는데
  useRouter나 useHistory는 hook이기 때문에 component가 아닌 saga에선 사용이 불가능 함(hooks rule)

- 문제 해결
  - saga에서 페이지 이동을 시키려 했으나 위와 같은 문제로 잘 되지 않음
  - 'history', 'react-router-redux' 라이브러리 둘다 써봤는데 typescript문제인지 next문제인지 뭔지 잘 되지 않음
  - 기존 방식 대로 컴포넌트에서 페이지를 이동 시키는 대신 flag로 사용중인 done변수를 false로 만드는 dispatch를 실행문 마지막에 추가해서 성공

</details>

<details>
<summary>2021.08.28(Tony)</summary>

### 강의 수정 페이지 로드 시 데이터 받아오기(redux saga)

- 확인

### children component에 props 전달하기

```typescript
<CourseMain>
  {console.log('React.isValidElement(children)', React.isValidElement(children))}
  {React.isValidElement(children) && React.cloneElement(children, { lectureData })}
  {/* {React.Children.map<React.ReactNode, React.ReactNode>(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { lectureData });
            }
          })} */}
  {/* {children} */}
</CourseMain>
// 결론 안됨 => each child에서 store에서 데이터 가져오기
```

- each child에서 store에서 데이터 가져오기

### typescript에서 initial data 를 하나하나 다 넣어줘야되는건지 알아보기

- 초기값을 다 넣어줘야 될 것 같음

### 참고문헌

- [children component에 props 전달하기](https://eomtttttt-develop.tistory.com/203)
  - `This JSX tag's 'children' prop expects a single child of type 'ReactElement<any, string | JSXElementConstructor<any>>', but multiple children were provided.` => 안됨
  - https://stackoverflow.com/questions/42261783/how-to-assign-the-correct-typing-to-react-cloneelement-when-giving-properties-to
    - 안됨 : React.isValidElement(children) 통과가 안됨
  - https://www.geeksforgeeks.org/how-to-use-react-cloneelement-function/
  - [리액트 요소 검증하기](https://webisfree.com/2020-08-26/[react]-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9A%94%EC%86%8C-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0-isvalidelement)
    - 하나 짜리만 됨(`<div>하나<div>` 같은)
      - 하나 짜리도 props 전달이 잘 안됨
- [react-children with typescript](https://www.carlrippon.com/react-children-with-typescript/)

</details>

<details>
<summary>2021.08.31(Tony)</summary>

### eslint => react/require-default-props : off

- https://stackoverflow.com/questions/63696724/eslint-problem-with-default-props-in-functional-component-typescript-react

### onClickDelete

#### 1차 시도 : store state is read-only

```typescript
const onClickDelete = (_list: string[], index: number) => {
  _list.splice(index, 1);
};
<button onClick={() => onClickDelete(list, index)} type="button">
  <DeleteIcon />
</button>;
```

- redux에 있는 데이터는 read-only 임
- dispatch를 이용해서 reducer에서 작업을 하려고 했었는데 component에 들어오는 string[]이 store에 각각 다르게 저장되어 있기 때문에 기존의 draft.initialState.data 같은 방식으로 수정할 수 없음

#### 2차 시도 : read-only 제거 - setAutoFreeze(false);

```typescript
// store에서 read-only 속성 제거
import { setAutoFreeze } from 'immer';
setAutoFreeze(false);

// TextListBox.tsx
const onClickDelete = (_list: string[], index: number) => {
  _list.splice(index, 1);
};
<button onClick={() => onClickDelete(list, index)} type="button">
  <DeleteIcon />
</button>;
```

- store에 있는 값을 직접 변경 가능하지만 re-render가 안됨
  - 원래 reducer로 store의 값을 변경하면 re-render가 되는데 이런식으로 바로 바꿔버리니까 안되는 듯

#### 3차 시도 : useState에 store의 state를 넣고 setState를 컴포넌트에 전달

```typescript
// course_info.tsx
const [textArray, setTextArray] = useState<string[]>();
<TextListBox list={textArray} setTextArray={setTextArray} />;

// TextListBox.tsx
type Prop = {
  list?: string[];
  setTextArray: React.Dispatch<React.SetStateAction<string[] | undefined>>;
};

const TextListBox = ({ list = [], setTextArray }: Prop) => {
  const onClickDelete = (textList: string[], index: number) => {
    textList.splice(index, 1);
    setTextArray([...textList]);
    console.log('after remove', textList);
  };

  return (
    <button onClick={() => onClickDelete(list, index)} type="button">
      <DeleteIcon />
    </button>
  );
};
```

- setState를 전달을 해도 setTextArray(textList) state를 직접 변화하고 그것을 그대로 전달하면 렌더링이 되지 않음
- setTextArray([...textList]); 같이 배열을 새로 할당해서 전달해야 렌더링이 다시 됨
- TextListBox를 사용하는 개수만큼 useState를 만들어서 각각 전달할 예정

#### 'react/no-array-index-key': 'off'

- index를 key로 사용할 때 나오는 eslint 경고
- 나중에 eslint때문에 문제될 것 같아서 미리 제거

### 참고문헌

- [javascript removing element of array cleanest way](https://stackoverflow.com/questions/47023975/what-is-the-cleanest-way-to-remove-an-element-from-an-immutable-array-in-js)
- [Cannot test reducer: Cannot assign to read only property](https://github.com/reduxjs/redux-toolkit/issues/424)

### 과연 이 방법이 최선인가?

- 컴포넌트 재사용을 위해 리덕스의 read-only속성을 없애고 useState를 각각 만들면서 사용해야되는 건지, 다른 더 좋은 방법은 없는지 찾아봐야 함

### 다음 진행 예정

- [ ] drag and drop으로 array 순서 변화

</details>

<details>
<summary>2021.09.01(Tony)</summary>

### 불변성 보장 하면서 array에서 요소 삭제 하기

```javascript
const arr = ['a', 'b', 'c', 'd', 'e'];

const indexToRemove = 2; // the 'c'

const result = [...arr.slice(0, indexToRemove), ...arr.slice(indexToRemove + 1)];

console.log(result);

// slice는 ...arr를 두번이나 하는 번거로움이 있으므로
const textArray = [...textList];
textArray.splice(index, 1);
// 배열 복사 후 splice를 사용
```

### typescript function type

- parameter 타입, return 타입을 정의해주면 된다.

```typescript
fn: (a: string) => void
```

### redux를 typescript에서 사용하면 initialState는 전부 초기값이 있어야 된다.

- reducer에서 action.data를 받아서 넣을 때 optional chaining을 사용할 수 없다고 나옴

### 참고 문헌

- [typescript function type](https://www.typescriptlang.org/docs/handbook/2/functions.html)

</details>

<details>
<summary>2021.09.02(Tony)</summary>

## TextListBox delete button

### High order function 적용

- HOF로 바꿔도 컴포넌트의 함수타입은 그대로 적용해도 적용됨
- [ ] HOF의 예시를 더 찾아보고 장점을 알아보기

### 버그 수정

- `이런 분들에게 추천해요` 에서 TextListBox를 사용할 때 list array를 expectedStudents가 아닌 whatYouCanLearn으로 오타가 있는 부분을 수정함

</details>

<details>
<summary>2021.09.05(NOAH)</summary>

## 회원가입 error 메시지

- err.response.data에 서버에서 받아온 에러 메시지가 있음
- AxiosError typescript 처리

```typescript
onError: (err: AxiosError) => {
  console.error(err.response?.data);
};
```

- useInput 커스텀 훅 nodebird 강의에서 가져옴

```typescript
import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnType<T = any> = [T, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<T>>];

const useInput = <T>(initialData: T): ReturnType<T> => {
  const [value, setValue] = useState(initialData);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
```

## 구현 할 것

- 비밀번호 찾기 모달
- 간편 회원가입
- 간편 로그인

</details>

<details>
<summary>2021.09.14(NOAH)</summary>

## 비밀번호 찾기 Modal 구현 (Portal 사용)

- \_document.js 페이지에 Modal을 넣을 div tag 추가

```html
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </head>
  <body>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019" />
    <main />
    <NextScript />
    <div id="find-password-modal" />
  </body>
</html>
```

- Portal wrapper 추가

```typescript
export default function Portal({ children, selector }: IProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return mounted ? createPortal(children, document.querySelector(selector)!) : null;
}
```

- Content가 되는 component 추가
- 비밀번호 찾기 버튼에 따라 showFindPasswordModal useState 변수의 boolean값을 변경하여 제어

```typescript
{
  showFindPasswordModal && (
    <Portal selector="#find-password-modal">
      <FindPasswordModal handleCloseModal={handleCloseFindPasswordModal} />
    </Portal>
  );
}
```

## 구현 할 것

- 백엔드쪽에 Router가 구현된 후 API 연결 테스트를 해야 함

</details>

<details>
<summary>2021.09.19(나현)</summary>

## 구현한 것

- 강의 페이지 레이아웃을 대략적으로 구현
- 강의 카테고리와 필터(난이도, 유·무료 선택, 온라인/오프라인)를 각각 CategoryMenu 컴포넌트와 LectureFilter 컴포넌트로 분리
- 강의 검색하기 부분 디자인 구현
  - 인프런 CSS 참고함.

## 앞으로 진행할 작업

- 더미데이터로 강의 리스트 나타내기
- 카드 정렬 스타일을 선택하는 Grid와 List 버튼 구현하기

</details>

<details>
<summary>2021.09.13~19.(Tony)</summary>

## 강의 생성 부 drag and drop

![](https://images.velog.io/images/gth1123/post/f3f4e477-405e-428d-a5c9-2d931999fa2d/dragAndDrop.gif)

javascript로 직접 구현하려 했으나 애니메이션발동 도중 DOM을 변경하거나
(DOM 위치가 바뀌면 애니메이션이 바뀐 위치를 기준으로 동작하기 때문에 계산이 어렵다)
애니메이션이 끝나기 전에 애니메이션의 도착지점을 변경하는 것이 어려워서 라이브러리를 사용하기로 했다

### sortablejs vs react-sortable-hoc vs react dnd

#### sortablejs

- Weekly Downloads : 약 80만
- 자바스크립트에서 사용하기 위해서 만들어진 라이브러리
- [sortablejs 예제](http://sortablejs.github.io/Sortable/#simple-list)
- react-sortablejs를 사용하면 리액트에서도 편하게 사용가능
  - Weekly Downloads : 약 8만

#### react-sortable-hoc

- Weekly Downloads : 약 46만
- 예제가 잘 되어있다
- [react-sortable-hoc 예제](http://clauderic.github.io/react-sortable-hoc/#/basic-configuration/basic-usage?_k=mpdxwt)

#### react dnd

- Weekly Downloads : 약 81만
- drag and drop react 라이브러리 중 가장 많이 사용된다

#### 선정 기준

- inflearn 애니메이션과 가장 유사한 것
- sortablejs가 거의 똑같고 나머진 mouseup 과 mousedown에서 애니메이션이 이동되는 방식이었다(drag api를 사용하지 않는 것으로 보임)

### react-sortablejs

```
npm install --save react-sortablejs sortablejs
npm install --save-dev @types/sortablejs
```

- force flag를 사용해서 설치를 했다.

- [npm cli flag: ` force` and ` legacy peer deps`](https://github.com/Ark-inflearn/inflearn-clone-front/wiki/npm-cli-flag:-%60--force%60-and-%60--legacy-peer-deps%60)

#### key !== index

DO NOT use the index as a key for your list items. Sorting will not work.

In all the examples above, I used an object with an ID. You should do the same!

I may even enforce this into the design to eliminate errors.

### type 변경 및 설정

- [x] lectureData?.courseInfo에 속한 배열 whatYouCanLearn, expectedStudents, requiredKnowledge 타입변경
  - string[] -> {name: string, order: number}[]
- [x] ReactSortable(sortablejs 라이브러리 컴포넌트)에 props type 맞게 설정

### redux 관련 세팅

- [x] 드래그 앤 드랍 후 저장 버튼 누르면 변경된 순서로 보내기(saga)
- [x] 중간 저장하면서 saga에서 order를 내가 변경해서 보내주는게 맞는건지 생각해보기

  - 그냥 프론트에서 변경된 order로 보내주자 - 나중에 백엔드랑 같이 고민해봐야 함

- delete 아이콘 클릭하면 삭제하던 방식 변경
  - 기존 : reducer에서 store에 있는 것을 바로 삭제
  - 변경 : store에 있는 것을 건들지 않고 useState로 임시로 저장 후 삭제 또는 순서의 변경을 해당 페이지에서 중간저장 버튼을 누르면 서버에 반영되도록 변경
    - 변경된 순서는 새로고침을 하면 다시 서버에서 변경 데이터를 store에 저장하는 방식
    - store는 서버에서 받은 정보만을 저장
    - react-sortablejs에서 사용하는 방식과 맞추는 것

## Things to do on this page

- [ ] 카테고리, 강의 수준 만들기
- [x] 중간 저장버튼과 redux, saga 연결하기
</details>

<details>
<summary>2021.09.19 ~ 20.(Tony)</summary>

## 추가 하기 버튼 기능 구현

- 추가하기를 누르면 store가 아닌 setState에서 변경
  - redux store에 직접 변경하지 않는 이유는 react-sortablejs에서 useState를 사용하기 때문

```typescript
// ReactSortable 컴포넌트에서 setList 속성에 setState가 들어가야 함
<ReactSortable list={expectedStudents} setList={setExpectedStudents} animation={200} handle=".handle">
  {expectedStudents.map((item, index) => (
    <TextListBox key={item.id} item={item} list={expectedStudents} setList={setExpectedStudents} index={index} />
  ))}
</ReactSortable>
```

</details>

<details>
<summary>2021.09.25.(Tony)</summary>

- [ ] package.json에서 dev에 포함된 NODE_OPTIONS='--inspect'자세히 알아보기
  - 예전엔 안됐었는데 지금은 되는 이유
- [x] create_course.tsx warning 조사 후 수정하기
- [ ] course_info.tsx warning 조사 후 수정하기
  - 무시
- [x] 추가하기 이후 input tag value 초기화

### create_course.tsx warning 조사 후 수정하기

- react_devtools_backend.js:4049 Warning: Received `false` for a non-boolean attribute `loading`.

```
// create_course.tsx

Warning: Received `false` for a non-boolean attribute `loading`.

If you want to write it to the DOM, pass a string instead: loading="false" or loading={value.toString()}.

If you used to conditionally omit it with loading={condition && value}, pass loading={condition ? value : undefined} instead.
```

#### BtnMakeCourse의 loading prop에 $를 붙여서 해결

```typescript
// create_course.tsx
interface IBtnProps {
  $loading: boolean;
}

const BtnMakeCourse = styled.button`
  // ...
  pointer-events: ${(props: IBtnProps) => (props.$loading ? 'none' : 'auto')};
  opacity: ${(props: IBtnProps) => (props.$loading ? 0.7 : 1)};
`;

<BtnMakeCourse $loading={createLectureLoading} type="button" onClick={handleSubmit}>
  강의 만들기
</BtnMakeCourse>;
```

- Transient props : $
  - 스타일이 지정된 구성 요소에 의해 사용되는 props가 기본 React 노드로 전달되거나 DOM 요소에 렌더링되는 것을 방지하려면 prop 이름 앞에 달러 기호($)를 붙여 일시적인 prop으로 만들 수 있습니다.

#### 참고 문헌

- https://mygumi.tistory.com/382
- https://stackoverflow.com/questions/49784294/warning-received-false-for-a-non-boolean-attribute-how-do-i-pass-a-boolean-f
- https://styled-components.com/docs/api#transient-props

### course_info.tsx warning

```
Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
```

```typescript
<form onSubmit={handleSubmitAddItem(inputWhatYouCanLearn)}>
  <Label>이런 걸 배울 수 있어요</Label>
  <BoxInput ref={inputWhatYouCanLearn} type="text" placeholder="e.g., 리액트 네이티브 개발" />
  <AddButton type="submit">추가하기</AddButton>
  <WarnMessage>두 개 이상 넣어주세요</WarnMessage>
</form>
```

- 위 코드에서 input tag에서 value를 사용하고 있지 않음
  - 원인 파악 안됨 - 프로그램에 영향없으니 무시하기로 함

#### 참고 문헌

- https://bbangaro.tistory.com/28
- https://stackoverflow.com/questions/43556212/failed-form-proptype-you-provided-a-value-prop-to-a-form-field-without-an-on

### 추가하기 이후 input tag value 초기화

```typescript
// course_info.tsx의 handleSubmitAddItem 함수
inputElement.current.value = ''; // input value 초기화
```

</details>

<details>
<summary>2021.09.23 ~ 29(나현)</summary>

## 구현한 것

- 더미데이터로 강의 데이터를 가져와서 Grid와 List 스타일에 맞는 형태로 강의 카드를 보여줌.

  - 스타일 선택 버튼을 눌렀을 때, 쿼리 파라미터로 강의 카드 스타일 값을 전달

    ```
    http://localhost:3000/courses?view=Gird
    ```

    위 url로 바로 접근했을 때 Grid 형식의 강의 스타일이 유지됨.

    - view에 전달할 수 있는 값

      | view 값 | 역할        |
      | ------- | ----------- |
      | Grid    | Grid 스타일 |
      | List    | List 스타일 |

- 강의의 할인율과 원가를 나타내는 LecturePrice 컴포넌트 생성

  ```jsx
  <LecturePrice price={price} discount={onDiscount} cardStyle="List" />
  ```

  - props 설명

    | props     | 역할                                        | 전달 데이터 값                                                                                                                           |
    | --------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
    | price     | 원래 가격을 전달하는 부분                   | lecture 더미데이터의 price                                                                                                               |
    | discount  | 할인율을 전달하는 부분                      | lecture 더미데이터의 onDiscount                                                                                                          |
    | cardStyle | 각 강의 카드 스타일에 맞게 가격을 표시해줌. | <p>Grid: 기존 강의 카드(LectureCard.tsx)에 맞는 디자인</p><p>List: 수평으로 디자인된 강의 카드(HorizonLectureCard.tsx)에 맞는 디자인</p> |

- HeaderLayout에 강의 페이지 경로인 /courses 추가

## 아이콘 버튼 hover할 때마다 Card 컴포넌트 리렌더링 문제 해결 과정

- **문제 상황**
  추가 관련 아이콘 버튼을 hover 할 때마다, 랜덤으로 지정되는 해시태그 부분의 색상이 지속적으로 변경되는 문제 발생
- **문제 해결 과정**

  - React Developer Tools로 컴포넌트가 렌더링 될 때 업데이트 되는 부분을 확인해본 결과, 해당 아이콘이 위치한 HorizonLectureCard 컴포넌트 자체가 Hover할 때마다 리렌더링 되고 있었다.
  - 처음에는 이벤트 동작으로 인한 문제라고 생각했으나 이벤트 버블링으로 인해 발생한 문제는 아니었다.
    왜냐하면 onMouseEnter와 onMouseLeave는 버블링이 존재하지 않고 캡쳐 단계 또한 없기 때문이다.
    [onMouseEnter와 onMouseLeave의 버블링 문제 관련 글](https://github.com/facebook/react/issues/5739)
    [React의 마우스 이벤트 관련 소개글](https://ko.reactjs.org/docs/events.html#mouse-events)

  - 일단 HorizonLectureCard 컴포넌트 안에서만 리렌더링이 되고 있었기 때문에 Icon Button만 모은 컴포넌트 안에서 따로 실행시킨다면 문제가 안 될 것 같다고 생각했다. 그래서 Icon Button을 모은 IconButtons 컴포넌트로 분리한 후 hover를 다시 시도했더니 문제가 해결되었다.

- **해결 과정을 통해 알게된 문제 발생 이유**
  - isHoverCart와 같은 state들이 변경될 때마다, 해당 state가 존재하는 컴포넌트 전체에 영향을 끼쳐서 리렌더링 되었기 때문에 이러한 문제가 발생하게 된 것이다.
  - 리액트는 특정 state가 변경되면 해당 state가 선언된 컴포넌트와 하위 컴포넌트들을 모두 리렌더링 시킨다.
  - 불필요한 리렌더링을 방지하고 리액트 성능 최적화를 위해서 state를 다루는 컴포넌트는 따로 분리 시켜줘야 한다.
- **참고**
  [리액트의 state 선언 위치 관련 글](https://cocoder16.tistory.com/36)

## 앞으로 진행할 작업

- 기술 검색 부분 구현하기
- 추천순, 인기순 등 정렬 선택 버튼 구현하기
</details>

<details>
<summary>2021.09.27.(Tony)</summary>

# branch : course_info/category

### Things to do

- [x] 카테고리 목록은 처음에 서버에서 받아오기(DB로 관리하는 것이 관리자페이지에서 관리하기 편하기 때문)
  - CourseLayout.tsx > dispatch(LOAD_EDIT_LECTURE_REQUEST) > saga : loadEditPage

```typescript
// 페이지 바뀔 때 마다 서버에서 데이터 다시 가져오기
const currentUrl = useRef('');

function getCurrentPath() {
  currentUrl.current = router.pathname.split('edit')[1];
  // console.log(currentUrl);
  return currentUrl.current;
}

useEffect(() => {
  dispatch({
    type: LOAD_EDIT_LECTURE_REQUEST,
  });
}, [currentUrl.current]);
```

- [x] 카테고리 버튼 클릭 시 선택한 카테고리 state에 보관

  - state에 보관한 카테고리는 `저장 후 다음이동` 버튼을 누르면 취합돼어 서버로 전송

- [x] 선택된 카테고리 다시 클릭하면 선택 해제

- [x] 강의 수준도 카테고리와 같음

</details>

<details>
<summary>2021.10.03.(Tony)</summary>

## 상세소개 페이지

### Things to do

- [x] 기본적인 틀 잡기 : 제목, 소개글 등
  - textarea place holder만 색 연하게

```css
textarea::placeholder {
  color: #dbdbdb;
}
```

- [ ] 텍스트 에디터 넣기
- [ ] 텍스트 에디터에 서버에서 불러온 내용(HTML 같은 것) 넣기
- [ ] 완성 표시 조건 적용 및 저장 후 다음 이동

### next.js font 추가

- \_document의 Head에 추가 후 사용

```typescript
<Head>
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
    rel="stylesheet"
  />
</Head>
```

- font-family 변경
  - Roboto -> Noto+Sans+KR
  - 인프런과 달리 font-weight 800이 존재하지 않아서 기존 800인 것은 700으로 변경해야 함

</details>

<details>
<summary>2021.10.02 ~ 04(나현)</summary>

## 카테고리 및 강의 수준 버튼 클릭 시 전체 화면 리렌더링 문제 해결 과정

#### 문제 상황

React Developer Tools로 강의 생성 페이지의 카테고리 및 강의 수준 버튼을 클릭 할 때마다 전체 화면이 리렌더링 되는 문제 발견

#### 문제 발생 이유

- '2021.09.23 ~ 29(나현)'에 기재된 '아이콘 버튼 hover할 때마다 Card 컴포넌트 리렌더링 문제 해결 과정' 경험을 통해 버튼 클릭시 selectedCategoryId가 변경되면서 state가 선언된 컴포넌트와 하위 컴포넌트들을 모두 리렌더링 시켜서 발생한 문제라고 유추할 수 있었다.

#### 문제 해결 과정

- 일단 카테고리 영역으로 문제 해결을 진행함.
- 아래에서 말하는 부모 컴포넌트는 course_info.tsx이고 자식 컴포넌트는 CourseComminButton.tsx이다.
- **시도한 해결 방법 (1)**
  - 일단 CourseCommonButton은 원래 컴포넌트가 따로 분리되어 있었다. 다만 CourseCommonButton에서 발생시킨 selectedCategory state 변경이 부모 컴포넌트에 전달이 되어서 영향을 끼치고 있었기 때문에 course_info에 선언된 selectedCategory state를 CourseCommonButton으로 포함시켰다.
  - 이렇게 구현했을 때 리렌더링은 선택한 버튼에서만 발생했지만 카테고리가 중복 선택이 되는 문제가 발생했다.
- **시도한 해결 방법 (2)**
  - 첫번째로 시도한 해결 방법을 통해 선택한 버튼만 리렌더링이 되어야 하는 것이 아니라, 카테고리 부분 자체가 리렌더링이 되어야 이전에 선택했던 버튼 내역을 지워줘서 중복으로 버튼이 선택되는 문제를 해결해줄 수 있다고 판단했다.
  - 그래서 map 코드도 포함시켜서 CourseCommonButton 컴포넌트로 이동시켜서 버튼 하나를 선택하면 카테고리 버튼 전체가 리렌더링 되게끔 했다.
  - 하지만 데이터를 전달하는 방식에서 문제가 발생했다.
    자식 컴포넌트가 갖고 있는 카테고리 id state 값을 부모 컴포넌트로 전달해줘야 나중에 서버로 다른 데이터들과 함께 전달 할 수 있는데, 부모 컴포넌트가 카테고리 id state를 전달 받아서 부모 컴포넌트 내에서 새로 생성한 state에 값을 저장하면 전체 화면 리렌더링이 발생해서 컴포넌트 분리를 한 의미가 없어지게 됐다.
    그리고 redux를 사용할 수도 있었지만 토니님과 의견을 나누는 과정에서 redux 사용이 어쩌면 단순한 과정을 번거롭게 만들 수 있겠다는 생각이 들었다.
- **최종 해결 방법**

  - [토니님이 useRef로 시도하신 방법](https://github.com/Ark-inflearn/inflearn-clone-front/issues/83)에서 아이디어를 얻어서 자식 컴포넌트에서 부모 컴포넌트로 전달 받은 카테고리 id값을 useRef로 저장하면 되겠다고 생각을 됐다.
  - 참고로 [useRef의 current 값이 바뀐다고 하여 컴포넌트가 리렌더링 되지 않는다.](https://ko.reactjs.org/docs/hooks-reference.html#useref)
  - 수정한 CourseCommonButton 컴포넌트는 강의 수준 선택에서도 재사용이 가능하게끔 만들었다.

  1. 먼저 CourseCommonButton.tsx에서 전달받아서 저장할 categoryId를 useRef로 선언해준다.
     ```javascript
     const categoryId = (useRef < string) | (number > '');
     const levelId = (useRef < string) | (number > '');
     ```
  2. course_info.tsx에서 카테고리 선택 영역의 기존 map 함수가 있던 자리에 `<CourseCommonButton />` 컴포넌트만 있는 코드로 바꿔준다. 이 컴포넌트는 kind로 category값을 가지기 때문에 카테고리 버튼을 담당한다.

     ```jsx
     <FieldDivMarginTop>
       <Label>카테고리</Label>
       <CourseCommonButton kind="category" handleId={handleId} data={lectureData.courseInfo.category} />
     </FieldDivMarginTop>
     ```

     강의 수준 선택 영역은 아래와 같이 코드를 작성한다.

     ```jsx
     <FieldDivMarginTop>
       <Label>강의 수준</Label>
       <CourseCommonButton kind="level" handleId={handleId} data={lectureData.courseInfo.level} />
     </FieldDivMarginTop>
     ```

     - props 설명

     | props    | 역할                                                                        | 전달하는 데이터                                                 |
     | -------- | --------------------------------------------------------------------------- | --------------------------------------------------------------- |
     | kind     | 버튼 종류 선택하는 부분                                                     | <p>category: 카테고리 버튼</p><p>level: 강의 수준 선택 버튼</p> |
     | handleId | 카테고리 혹은 강의 수준(level)의 id와 kind가 저장된 객체 값을 전달받는 부분 | course_info에 선언된 handleId 함수                              |
     | data     | 카테고리 및 강의 수준에 관한 값을 전달하는 부분                             | lectureData에서 배열로 된 category 혹은 level 데이터            |

  3. 그리고 CourseCommonButton.tsx에는 다음과 같이 코드를 수정해줬다. 참고로 useEffect 부분과 상관없이 버튼을 선택할 때마다 리렌더링이 되어서 useEffect 코드를 구현하지 않았다.
     selectedId state는 선택한 버튼의 아이디를 저장하는 것으로, 이전에 사용했던 selectedCategoryId와 같은 역할을 하는데 카테고리 뿐만아니라 강의 수준 버튼을 구현할 때는 selectedLevelId 역할을 한다.
     ```jsx
     const [selectedId, setSelectedId] = (useState < string) | (number > '');
     ```
     그리고 버튼 클릭으로 onClickButton이 실행될 때 선택한 버튼의 item.id 값이 전달되게 해줬다.
     ```jsx
     return (
       <>
         {data.map((item) => (
           <CourseCommonButtonStyle
             onClick={() => onClickButton(item.id)}
             key={item.id}
             isSelected={item.id === selectedId}
           >
             {item.name}
           </CourseCommonButtonStyle>
         ))}
       </>
     );
     ```
     실행된 onClickButton의 각 조건문 안에는 handleId 프로퍼티를 통해 선택한 버튼의 id와 현재 실행되고 있는 버튼의 종류를 객체로 전달한다.
     ```javascript
     const onClickButton = (id: string | number) => {
       if (id === selectedId) {
         // true - 선택된 상태
         setSelectedId('');
         handleId({ id: '', kind });
       } else {
         // 선택된 상태가 아닌 경우
         setSelectedId(id);
         handleId({ id, kind });
       }
     };
     ```
  4. 위 handleId가 실행될 때 course_info에 선언되어있는 hadleId 함수로 인자 값이 전달된다. 매개 변수에서 kind 속성을 확인하여 각 버튼 종류의 id에 맞게 값을 저장시켜준다.
     ```javascript
     const handleId = (value: { id: string | number, kind: string }) => {
       // value는 CourseCommonButton의 handleId 프로퍼티의 인자를 통해 전달 받은 값
       if (value.kind === 'category') categoryId.current = value.id;
       if (value.kind === 'level') levelId.current = value.id;
     };
     ```
     이렇게 저장한 값인 categoryId.current와 levelId.current는 onClickSaveButton이 실행됐을 때 서버로 전달하는 아래의 data 객체에 같이 실어서 보낼 수 있게 된다.
     ```
       const data = {
         whatYouCanLearnList,
         expectedStudentsList,
         requiredKnowledgeList,
         selectedCategoryId: categoryId.current,
         selectedLevelId: levelId.current,
       };
     ```

</details>

<details>
<summary>2021.10.08 ~ 09, 11(나현)</summary>

## 의논 사항 반영

- 별점 크기를 반응형 웹에 맞게 조절

  - props로 `responsive`를 추가해줘야 반응형으로 동작하고 `reponsive`를 추가해주지 않으면 고정된 크기로 동작한다.
  - 참고로 `responsive` 만 적는 것과 `responsive={true}`는 같은 역할을 한다.
    - 반응형 웹에 맞게 별점크기를 변경하려 할 때
      ```jsx
      <RatingStar rating={rating} size="1.5rem" responsive />
      ```
    - 고정된 별점 크기를 나타내려 할 때
      ```jsx
      <RatingStar rating={rating} size="1.5rem" />
      ```

- LectureCard.tsx에서 가격을 나타내는 부분을 LecturePrice 컴포넌트로 수정

- LectureCard와 HorizonLectureCard에서 동시에 사용할 수 있게 IconButtons 컴포넌트로 수정

  - view props에 전달하는 값에 따라 강의 리스트 스타일에 맞는 아이콘 버튼을 보여줄 수 있도록 했다.

    ```
    <IconButtons view="Grid" />
    ```

    - props 설명

      | props | 역할                                  | 전달하는 값                                      |
      | ----- | ------------------------------------- | ------------------------------------------------ |
      | view  | 강의 리스트 스타일 값을 전달하는 부분 | <p>Grid: Grid 스타일</p><p>List: List 스타일</p> |

## 이슈 해결

- 강의 페이지에서 Grid나 List 버튼을 클릭한 후 데이터를 불러올 때 기존 화면 위에 스피너 불러오기

  - 이미 선택된 버튼을 눌렀을 경우에는 데이터 재요청을 하지 않도록 했다.
  - 그리고 버튼을 누르자마자 스피너가 실행되어서 기존에 화면 전환 시간이 오래 걸리는 단점도 함께 보완됐다.

- /courses?view=Grid -> /courses?view=List 누르고 뒤로가기 버튼을 누르면 이전 페이지로 이동하지 않고 /courses?view=List -> /courses?view=Gird 이후에 이전 페이지로 이동하는 문제를 해결
  - 기존 router.push를 사용하면 url이 변경 될 때 마다 History(브라우저 세션 기록) Stack에 쌓이게 되어 '뒤로가기'를 눌렀을 때 view가 변경된 내역이 다 반영됐다.
  - router.replace를 사용했을 경우 url은 변경되지만 History stack에는 반영되지 않아서 뒤로가기를 눌렀을 때, 강의 페이지에 접근하기 전의 페이지로 바로 이동한다.
- selected-list-view 부분의 css 코드를 GlobalStyle.css가 아닌 selected-list-view을 사용하고 있는 내부 컴포넌트에 css 코드를 작성

  - getSelectedStyle 함수에 기존 selected-list-view css 코드를 저장하여, 버튼이 선택되었을 때 함수를 호출하여 데이터를 불러오게 했다.

    ```
    const getSelectedStyle = () => `
      background: #1dc078 !important;
      border-color: transparent !important;
      color: white;

      &:hover {
        background: #1bb571 !important;
        border-color: transparent !important;
        color: white;
      }
    `;

    const ListViewBtn = styled.button<ListViewProps>`
      ${(props) => (props.isSelected ? getSelectedStyle() : '')}
      ...
    `;
    ```

  - 참고로 `` const selected style = `background: #1dc078;...`; `` 이렇게 상수로 css 코드를 선언할 수도 있었지만 기존 styled-components 코드와 헷갈릴 수 있다고 생각하여 함수로 선언했다.

## 앞으로 진행할 작업

- 각 조건 선택 버튼 부분을 컴포넌트로 분리할 때, 쿼리스트링 전달 문제에 대해 고민한 후 강의 리스트 스타일 선택 버튼을 따로 컴포넌트 분리하기
- 브라우저 너비에 따라 변경되는 별점 크기에 맞추어 등록된 리뷰수 글자 나타내는 부분도 크기 조절하기
- 정렬순 버튼 구현하기

</details>

<details>
<summary>2021.10.13, 20 ~ 22(나현)</summary>

## 구현한 것

- 정렬순 선택 버튼 디자인 및 view를 선택한 값과 함께 정렬순 선택 값이 URL 쿼리에 반영되도록 구현

  - 정렬순을 선택했을 때 url로 나타내면 다음과 같다.

    ```
    http://localhost:3000/courses?order=popular
    ```

    - order에 전달할 수 있는 값

      | order 값  | 역할     |
      | --------- | -------- |
      | recommend | 추천순   |
      | popular   | 인기순   |
      | recent    | 최신순   |
      | rating    | 평점순   |
      | famous    | 학생수순 |

  - view와 order를 동시에 나타내게 할 수 있으며 order는 popular이나 view가 Grid 일 때, view를 List로 변경하면 order값은 popular로 계속 유지가 되고, view값만 List로 변경된다. 반대로 order값만 변경한다고 해도 view 값은 유지되고, order값만 바뀐다.
    view와 order를 함께 url 쿼리에 반영하면 다음과 같다.
    ```
    http://localhost:3000/courses?view=Grid&order=popular
    ```

- 검색에서 쿼리로 전달 받은 데이터를 서버쪽으로 전송이 가능하도록 코드 추가 작성
  - 검색 관련 API가 만들어지기 전까지는 더미데이터 활용

## view나 order 버튼을 누를 때마다 즉각적으로 url에 반영이 되지 않는 문제 해결

- **문제 상황**

  - view 버튼이랑 order 버튼을 각각 따로 이렇게 `http://localhost:3000/courses?view=Grid`, `http://localhost:3000/courses?order=popular` 나타날 때는 문제가 없었다.

  - 근데 `http://localhost:3000/courses?view=Grid&order=popular` 이렇게 같이 구현하려고 하니까 List 버튼을 눌렀을 때 url에 List가 즉각적으로 변경되지 않고, 다시 Grid 버튼을 눌렀을 때 `http://localhost:3000/courses?view=List&order=popular` 로 뒤늦게 List 값으로 변경이 되는 문제가 있었다.

- **문제가 발생한 이유**

  - `useState`로 view와 order 값을 바꿨을 때, 동기적으로 url에 즉각 값이 반영되어 바뀌지 않았다.

- **시도한 해결 방법**

  - useEffect를 통해 바꾼 값이 바로 반영되게 해서 `router.replace`로 url이 이동되게끔 했다.

  - 하지만 처음 로딩 할 때 useEffect가 실행이 되다보니, `router.replace` 때문에 불필요하게 처음 페이지를 로드 할 때마다 url 이동이 발생했다. 그래서 이 방법으로는 문제를 해결하지 못했다.

- **최종 해결 방법**

  - `useState`로 view와 order 값을 저장하고 변경하는 것 대신에, `useRef`를 사용해서 view와 order 값이 즉각적으로 바뀌게 했다.
  - 아래 해결 방법은 redux-saga 코드 추가 전에 구현한 것이라 최종적으로 구현된 코드와 차이가 있다.

  1. `useState`로 정의된 queryVIew와 queryOrder를 `useRef`로 다 변경시켜준다.

  ```jsx
  const queryOrder = (useRef < string) | (null > '');
  const queryView = (useRef < string) | (null > 'Grid');
  ```

  2. 그리고 기존 useEffect에서 아래의 코드와 같이 setQueryView로 값을 변경시키던 부분을 `queryView.current = view`로, setQueryOrder는 `queryOrder.current = order`로 변경해준다.

     ◎변경 전

     ```jsx
     useEffect(() => {
         ...
         if (view) setQueryView(view);
         if (order) setQueryOrder(order);

         dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
       }, []);
     ```

     ◎변경 후

     ```jsx
     useEffect(() => {
         ...
         if (view) queryView.current = view;
         if (order) queryOrder.current = order;

         dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
       }, []);
     ```

  3. 이 코드 뿐만 아니라 setQueryView로 되어 있던 부분은 전부 위와 같이 바꿔준다.

4. 그리고 `useRef` 통해서 queryList를 빈 객체로 선언하여 view나 order 버튼이 선택될 때 값을 저장한다. 그리고 `router.replace`로 query 값이 전달될 때 queryList에 저장된 값을 저장하도록 한다.

      아래는 view 버튼을 선택했을 때 사용되는 handleViewClick 코드의 예이다.

      ```jsx
      const queryList = useRef<queryListProps>({});
      ```

      ```jsx
      const handleViewClick = useCallback(
          (value: string) => {
            // 선택한 버튼이 이미 선택되어 있는 경우 if문 아래 코드 실행 안함
            if (queryView.current === value) {
              return;
            }

            queryList.current.view = value;

            router.replace({
              pathname: '/courses',
              query: queryList.current,
            });

            // view 버튼 클릭 시 매번 재요청 하는 것 고민하기
            // dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
            queryView.current = value;
          },
          [queryView, router]
        );
      ```

5.  # 그리고 `useRef` 통해서 queryList를 빈 객체로 선언하여 view나 order 버튼이 선택될 때 값을 저장한다. 그리고 `router.replace`로 query 값이 전달될 때 queryList에 저장된 값을 저장하도록 한다.
6.  그리고 `useRef` 통해서 queryList를 빈 객체로 선언하여 view나 order 버튼이 선택될 때 값을 저장한다. 그리고 `router.replace`로 query 값이 전달될 때 queryList에 저장된 값을 저장하도록 한다.

         아래는 view 버튼을 선택했을 때 사용되는 handleViewClick 코드의 예이다.

         ```jsx
         const queryList = useRef < queryListProps > {};
         ```

         ```jsx
         const handleViewClick = useCallback(
           (value: string) => {
             // 선택한 버튼이 이미 선택되어 있는 경우 if문 아래 코드 실행 안함
             if (queryView.current === value) {
               return;
             }

             queryList.current.view = value;

             router.replace({
               pathname: '/courses',
               query: queryList.current,
             });

             // view 버튼 클릭 시 매번 재요청 하는 것 고민하기
             // dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
             queryView.current = value;
           },
           [queryView, router]
         );
         ```

7.  그리고 `useRef` 통해서 queryList를 빈 객체로 선언하여 view나 order 버튼이 선택될 때 값을 저장한다. 그리고 `router.replace`로 query 값이 전달될 때 queryList에 저장된 값을 저장하도록 한다.

    아래는 view 버튼을 선택했을 때 사용되는 handleListViewClick 코드의 예이다.

    ```jsx
    const queryList = useRef < queryListProps > {};
    ```

    ```jsx
    const handleListViewClick = useCallback(
      (value: string) => {
        // 선택한 버튼이 이미 선택되어 있는 경우 if문 아래 코드 실행 안함
        if (queryView.current === value) {
          return;
        }

        queryList.current.view = value;

        router.replace({
          pathname: '/courses',
          query: queryList.current,
        });

        // view 버튼 클릭 시 매번 재요청 하는 것 고민하기
        // dispatch({ type: LOAD_ALL_LECTURES_REQUEST });
        queryView.current = value;
      },
      [queryView, router]
    );
    ```

8.  이런 식으로 코드를 바꿔주면 url주소가 [http://localhost:3000/courses?view=Grid&order=popular](http://localhost:3000/courses?view=Grid&order=popular) 였을 때, view를 List 버튼으로 눌러주게 되면 [http://localhost:3000/courses?view=List&order=popular](http://localhost:3000/courses?view=List&order=popular로) 로 view 부분만 바뀌게 된다. order 버튼도 마찬가지이다.

## 기존 코드에서 수정사항

- reducers/lecture.tsx에서 `loadLectureLoading: true`에서 `loadLectureLoading: false`로 변경
  - 처음에 페이지를 로드할 때는 LOAD_ALL_LECTURES_REQUEST를 사용하고, 검색을 할 경우에는 SEARCH_LECTURES_REQUEST가 실행되게 함.
  - 이에 따라 로딩 스피너를 실행할 때도 loadLectureLoading 뿐만아니라 검색을 할 경우에 사용되는 searchLecturesLoading을 따로 추가하게 됨.
  - 그래서 로딩 스피너를 불러올 때 사용하는 조건문을 `loadLectureLoading || searchLecturesLoading`로 수정함.
  - 하지만 loadLectureLoading 초기값이 true임에 따라 LOAD_ALL_LECTURES_REQUEST를 요청하지 않아도 로딩 스피너가 실행되는 문제가 발생함.
  - 나에게 발생한 문제는 SEARCH_LECTURES_REQUEST를 요청 후 SUCCESS가 되어 searchLecturesLoading가 false로 바뀌어도 loadLectureLoading가 계속 true라서 `loadLectureLoading || searchLecturesLoading` 조건문은 true 만 출력이 되고, 로딩 스피너가 무한히 실행되는 문제가 발생함.
  - 그래서 이 문제를 해결하기 위해 `loadLectureLoading: false`로 변경함.

## 진행 보류 작업

- 원래 강의 리스트 스타일 선택 버튼(view)과 정렬순 선택 버튼(order)부분을 따로 컴포넌트 분리
  - 기존 `useState`를 사용해서 쿼리를 변경하던 부분을 `useRef`로 바꾸면서 최적화도 상당 부분 되어 컴포넌트 분리의 이점이 보이지 않는다.
  - 만약에 컴포넌트 분리를 했을 경우, 쿼리를 변경해야 하기 때문에 부모 컴포넌트에서 자식 컴포넌트(ex. 검색 관련 버튼)에서 변경된 값을 받아와야 하는데 이 과정에서 `useRef` 사용으로 인해 성능 최적화 필요성도 줄어들어서 가독성에 대한 불편함을 감수하고 분리할 이유가 없다.
  - 하나의 컴포넌트에서 변경되는 값들을 최대한 같이 관리하는게 효율적이라 생각되어 분리 작업을 일단 보류하게 되었다.

## 앞으로 진행할 작업

- 기술 검색 부분 구현하기
- 검색 관련 API 문서 작성하기

</details>

<details>
<summary>2021.10.12~13, 16(Tony), 28, 30</summary>

### tinyMCE 설치

npm install --save @tinymce/tinymce-react
npm i tinymce

- 타입스크립트에서 tinymce를 타입으로 사용하기 위해 설치
- 원래 기본적으로 @tinymce/tinymce-react 만 설치해도 같이 설치되는 것 같지만 그럴 경우 package.json에 추가가 안되어있어서 타입사용 불가능

### .env 파일 생성, gitignore에 추가

- [.env 파일 내용(멤버공개)](https://www.notion.so/00bd4ff4b0c64c16862efeba772417e4?v=213923c71e3141778c982b4f0adb72c7&p=c39a63b09193487dad27eb1fc34e65e9)
- 환경변수 수정 : NEXT_PUBLIC_TINYMCE_KEY
  - https://cpro95.tistory.com/464

### 미리 작성된 HTML을 표시 하기

- Editor의 initialValue속성에 서버에서 받은 html string을 넣어주면 된다

### 사진은 어떻게 업로드하고 전송할까?

- [이미지 파일 업로드 분석1](https://velog.io/@gth1123/WYSIWYG-%EC%9D%B4%EB%AF%B8%EC%A7%80%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C)

### 각 prop에 대해 알아보기

### 에디터안의 버튼들(이미지 추가 버튼 등)을 어떻게 커스텀하는지 알아보기

### 전송할 때

#### 참고 문헌

- [tinyMCE React integration 공식문서](https://www.tiny.cloud/docs/integrations/react/#tinymcereactintegrationquickstartguide)
- https://www.npmjs.com/package/@tinymce/tinymce-react

### image upload

- https://codepen.io/pen/?&prefill_data_id=3a898cfe-8e09-42a7-ae28-ee8d7c70a540
- https://www.tiny.cloud/docs/plugins/opensource/image/#

### WIKI 추가 보완하기

- [ ] 이미지 업로드 관련
  - [ ] 파일 변환 과정에 대해 자세히 정리하기
    - [ ] base64, blob, file 차이 파악하기
- [x] 서버로 받아서 들어오는 데이터 확인해보기

### 설계 미스

- CourseLayout에서 처음에 모든 데이터를 가져오게 했는데 이러면 안될 것 같다
- 페이지 마다 모든 데이터를 다 불러오는 불필요한 요청이 발생한다
- CourseLayout에선 강의 정보 / 상세 소개 / ... 등 어떤 것이 다 입력이 된 상태이고 어떤 것이 안된 상태인지 파악하는 API가 있어야 될 것 같다

  - 그리고 각 페이지에서 각페이지에 필요한 데이터를 각각 요청해야될 것 같다

- [ ] CourseLayout에서 데이터 요청 하는 부분 리팩터링 하기
  - 다음 PR에서 진행할 예정

## 페어 프로그래밍

- [x] 서버로 전송할 때 id 보내주는 코드 추가
- [x] 전송 실패 시 알람창 띄우기

</details>

<details>
<summary>2021.11.2, 8(나현)</summary>

## 수정한 사항

- addView 부분 코드에서 url 쿼리 스트링에 view가 추가될 때와 그렇지 않을 때의 조건을 다시 생각해서 코드 수정
- 이해가 쉽게 되지 않는 부분에 대해 주석 추가
- handleOrderChange의 e에 React.ChangeEventHandler 타입 정의 후 e.target.value의 target 부분에 Property 'target' does not exist on type 'ChangeEventHandler<HTMLSelectElement>'. 에러나는 부분을 토니님이 알려주신 방법을 통해 해결

## view나 order 버튼 기능 이용 후, 상단 메뉴에서 '강의'를 다시 눌렀을 때 order와 view의 값이 여전히 유지되고 있는 문제 해결

**문제 상황**

view나 order 버튼 기능을 이용해서 view에는 List 값이 order에는 recommand 값이 입력되어있다고 할 때, 상단 메뉴에서 다시 '강의'를 눌러서 강의 페이지를 불러오면 이전에 입력했던 값들이 유지되어 있는 모습을 볼 수 있다.

예를 들면, 원래 '강의'를 눌렀을 때 처음 페이지가 로드 되었을 때는 view가 Grid값이어야해서 Grid 상태의 강의 카드 정렬을 보여줘야하는데, view에 이전에 눌렀던 값인 List가 저장되어 있어서 List 스타일의 강의 카드 정렬을 보여준다.

**문제가 발생한 이유**

view와 order는 useRef로 저장된 값을 컴포넌트가 unmount될 때 초기화를 시키지 않았기 때문이다.

**시도한 해결 방법 (1)**

처음에는 unmount를 구현하면 해결이 될 줄 알았다. 그래서 아래와 같은 코드를 추가했는데 페이지를 아예 벗어나야 언마운트 되고 값이 초기화가 되고, 그렇지 않으면 '강의' 메뉴를 눌러도 리렌더링만 될 뿐 언마운트 상태가 되어 값이 초기화가 되지는 않았다.

**시도한 해결 방법 (2)**

HeaderLayout.tsx에서 `<Link href={href}>` 대신에 `router.push(href)`를 사용해보고 next.js API 문서를 참고해서 혹시나 하는 마음에 Shallow 옵션도 router에 추가해봤지만 해결이 되지 않았다.

view나 order 버튼 기능을 이용해서 view에는 List 값이 order에는 recommand 값이 입력되어있다고 할 때, 상단 메뉴에서 다시 '강의'를 눌러서 강의 페이지를 불러오면 이전에 입력했던 값들이 유지되어 있는 모습을 볼 수 있다.

예를 들면, 원래 '강의'를 눌렀을 때 처음 페이지가 로드 되었을 때는 view가 Grid값이어야해서 Grid 상태의 강의 카드 정렬을 보여줘야하는데, view에 이전에 눌렀던 값인 List가 저장되어 있어서 List 스타일의 강의 카드 정렬을 보여준다.

**문제가 발생한 이유**

view와 order는 useRef로 저장된 값을 컴포넌트가 unmount될 때 초기화를 시키지 않았기 때문이다.

**시도한 해결 방법 (1)**

처음에는 unmount를 구현하면 해결이 될 줄 알았다. 그래서 아래와 같은 코드를 추가했는데 페이지를 아예 벗어나야 언마운트 되고 값이 초기화가 되고, 그렇지 않으면 '강의' 메뉴를 눌러도 리렌더링만 될 뿐 언마운트 상태가 되어 값이 초기화가 되지는 않았다.

**시도한 해결 방법 (2)**

HeaderLayout.tsx에서 `<Link href={href}>` 대신에 `router.push(href)`를 사용해보고 next.js API 문서를 참고해서 혹시나 하는 마음에 Shallow 옵션도 router에 추가해봤지만 해결이 되지 않았다.

**최종 해결 방법**

먼저 해결하기 전에 리액트로 구현한 사이트 중 라프텔 홈페이지는 필터 기능을 어떻게 구현했는지 살펴봤다. 라프텔에서는 일단 url의 쿼리 스트링으로 필터값을 받고 있지 않았다.

그리고 내가 구현한 방식인 useRef로 선택한 필터 값을 저장하고 잇는 것 같았다. 왜냐하면 다른 페이지로 이동했다가 뒤로가기로 다시 '태그검색' 페이지로 돌아오면 이전에 선택했던 필터값들이 유지가 되고 있기 때문이다. 아마도 언마운트 처리를 해주지 않은 것 같다.

인프런 방식을 따르면 url에 쿼리 스트링이 추가되니 북마크를 하는 경우에 이점이 있고,

라프텔 방식을 따르면 url에 쿼리 스트링이 추가되지 않으니 북마크 사용은 불가능하지만, 사용자가 메뉴를 눌러서 새로 고침을 하려고 시도를 했을 때 적어도 url이 바뀌지 않으니 새로고침이 되지 않는 구나하고 사용자가 스스로 판단은 할 수 있는 환경이라고 생각했다.

우리는 일단 기존 url에 쿼리 스트링이 추가된 상태에서 메뉴의 '강의'를 눌렀을 때 쿼리 스트링 부분만 없어지만 페이지가 초기화 되지 않으니 사용자 측면에서는 새로고침이 되지 않는 해당 페이지에 문제가 있다고 느낄 것이다.

그리고 내가 구현한 방식인 useRef로 선택한 필터 값을 저장하고 잇는 것 같았다. 왜냐하면 다른 페이지로 이동했다가 뒤로가기로 다시 '태그검색' 페이지로 돌아오면 이전에 선택했던 필터값들이 유지가 되고 있기 때문이다. 아마도 언마운트 처리를 해주지 않은 것 같다.

인프런 방식을 따르면 url에 쿼리 스트링이 추가되니 북마크를 하는 경우에 이점이 있고,

라프텔 방식을 따르면 url에 쿼리 스트링이 추가되지 않으니 북마크 사용은 불가능하지만, 사용자가 메뉴를 눌러서 새로 고침을 하려고 시도를 했을 때 적어도 url이 바뀌지 않으니 새로고침이 되지 않는 구나하고 사용자가 스스로 판단은 할 수 있는 환경이라고 생각했다.

우리는 일단 기존 url에 쿼리 스트링이 추가된 상태에서 메뉴의 '강의'를 눌렀을 때 쿼리 스트링 부분만 없어지만 페이지가 초기화 되지 않으니 사용자 측면에서는 새로고침이 되지 않는 해당 페이지에 문제가 있다고 느낄 것이다.

이렇게 문제가 발생하는 이유는 SPA의 문제인 것 같기도 했고, useRef를 사용해서 그런 것 같다는 생각도 들었다. 일단은 토니님과 상의하여 라프텔처럼 초기화 버튼을 추가하기로 했다.

## 앞으로 진행할 작업

- 기술 검색 부분 구현하기
</details>

<details>
<summary>2021.11.11 ~ 12(Tony)</summary>

# Upgrading from 11 to 12

- https://nextjs.org/docs/upgrading#upgrading-from-11-to-12

### 1) npm i next@latest

- next.js를 최신 버전(12.0.3)으로 업데이트
- https://github.com/Ark-inflearn/inflearn-clone-front/wiki/Next.js-version-12

### 2)||4) npm audit fix

- dependencies의 취약점을 자동으로 해결
- https://github.com/Ark-inflearn/inflearn-clone-front/wiki/npm-fund,-npm-audit-fix

### 3) npm install react@latest react-dom@latest

- 현재 react 공식 release 버전 : 17.0.2 (이미 최신이었음)

### 5) next.config.js

- 이번에 새로 추가함(이전에도 이 파일로 뭔가 설정할 수 있었는지는 잘 모름)
- SWC 설정
- https://nextjs.org/docs/api-reference/next.config.js/introduction
  - [ ] 읽어 보기

#### 5-1) SWC replacing Terser for minification

- Terser : https://www.npmjs.com/package/terser
  - A JavaScript parser and mangler/compressor toolkit for ES6+.
- uglify-es는 더 이상 유지보수 되고 있지 않고, uglify-js는 ES6+ 문법을 지원하지 않아서 바꾼 것 같다
  - https://github.com/vercel/next.js/issues/5021

```javascript
// next.config.js

module.exports = {
  swcMinify: true,
};
```

#### 5-2) 기존 .babelrc(Babel compiler) 를 사용하지 않고 SWC(Rust compiler)를 사용하기 위한 변경사항

- styled-components 관련 세팅
  - https://www.reddit.com/r/nextjs/comments/ql5y74/nextjs_12_and_styled_components/

```javascript
// next.config.js
module.exports = {
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
```

- `"displayName": true` 는 dev에서 default, product에선 안보이게 됨
  - https://github.com/vercel/next.js/discussions/30174

#### material-ui

- 아직 Rust compiler에서 지원하지 않는 것 같음(확인 필요)

## Update Next.js version 12

- 주요 변경 사항
  - 1. 러스트 컴파일러
    - refresh와 build 시간 감소
      - [x] refresh, build 시간 비교
  - 2. 미들웨어
    - [ ] 미들웨어 테스트 해보기
  - 3. React18 버전 지원
    - [ ] WIKI 작성
  - 4. `<Image />` 의 AVIF 포맷 지원
    - [ ] slider에 적용해보기
  - 5. Bot-aware ISR Fallback
  - 6. Native ES Modules Support
  - 7. URL Imports (alpha)
  - 8. React Server Components (alpha)
    - [ ] 사용전 후 테스트

### refresh, build 시간 비교

- build time
  - 11버전 : 1분 50초(빌드에 걸리는 총 시간)
  - 12버전 : 1분 38초(빌드에 걸리는 총 시간)
- refresh time
  - 11버전 : 강의 만들기 -> 강의 정보 : 5.41초
  - 12버전 : 강의 만들기 -> 강의 정보 : 3.16초

#### 12.0.2 can't build react-hook-form

- https://github.com/react-hook-form/react-hook-form/discussions/6961
- https://github.com/react-hook-form/resolvers/issues/271
- 12.0.1 버전에선 에러가 안난다고 하니 버전을 다운시키고 빌드 함
  - npm i next@12.0.1

#### 빌드 전 에러 잡기 -> 나중에 전부 수정해야 됨

- typescript
  - 선언 후 사용하지 않는 변수들 주석처리
    - 너무 많아질 것 같아서 tsconfig의 "noUnusedParameters" 옵션 주석처리
  - 라이브러리에서 불러와서 사용하지 않는 메서드
    - tsconfig의 "noUnusedLocals" 옵션 주석처리
- redux
  - store, rootReducer 세팅 방법 알아보기
  - @ts-nocheck로 보류
  - Minified Redux error #12; visit https://redux.js.org/Errors?code=12 for the full message or use the non-minified dev environment for full errors.
    - The slice reducer for key "" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.
      - initialState 초기값 undefined -> 값 지정(0, '' 등)
      - 나머지 undefined 관련 다 없앰
        - [x] 안없애도 되는지 실험해보기
          - 안없애도 되는 거였음
        - [ ] 기존 undefined 였던 것들 다시 원복하기
      - reducers/index.ts에서 state = {} 의 ={}를 지웠었는데 다시 붙이니까 됨
- eslintrc.js에 아래항목 rule off
  - '@typescript-eslint/ban-ts-comment': 'off',
    'react/no-this-in-sfc': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',

### 미들웨어 사용 해보기

### React Server components 사용 해보기

## 고찰

- 이번 next.js를 12버전으로 올리기 위해 빌드를 하면서 우리 앱에서 부족한 점들을 많이 찾을 수 있었다.
- 그 동안 기술부채를 쌓아왔던 것에 대해 자각할 수 있는 좋은 기회였다.
- 12버전에서 build time과 refresh time을 측정하기 위해 build를 하면서 발생하는 오류들을 인지할 수 있었다.
- 모든 오류를 정석적으로 해결하진 않았지만 테스트코드와 CI/CD 이후 리팩터링 하면서 조금씩 해결해갈 예정이다.

</details>

<details>
<summary>2021.11.13(나현, 토니)</summary>

## 페어프로그래밍

- 상세 소개 작성 후 저장할 때, 서버 문제 발생으로 나타나는 alert를 Material UI의 alert로 변경

</details>
