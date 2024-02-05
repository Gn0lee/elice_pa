# elice PA

## 실행 방법

```shell
npm install

npm run dev
```

## 사용 라이브러리

1. Next.js v13
2. styled-components
3. react-query, redux-toolkit
4. axios

## 흐름

1. 유저의 과목 리스트 검색 조건 수정
   1. 필터 변경시 쿼리 파라미터 갱신
   2. 페이지 클릭시 redux 상태 갱신
2. 쿼리파라미터와 redux 상태를 구독하는 react query에서 신규 middleware api 호출
3. middleware api에서 쿼리 파라미터 검사
   1. count, offset이 존재하며 정수형태인지 검사, 실패시 403 에러 반환
   2. keyword 필터 조건 추가
   3. price 쿼리 파라미터 값에 따라 필터 조건 추가 -> 유틸 함수로 분리
4. elice api 호출
5. elice api를 converter 유틸 함수를 통해 client에서 사용하는 형태로 변환
6. totalPages json에 추가하여 200 response 응답
7. CourseListBody에서 구독 중인 상태가 갱신되어 검색결과 렌더링

## 디렉토리 구조

```
├── src/app
│       ├── api
│       ├── components
│       ├── constants
│       ├── font
│       ├── hooks
│       ├── slice
│       ├── types
│       └── utils
```
- api
  -  클라이언트에서 호출하는 api를 포함합니다.
- components
  - ui를 구성하는 컴포넌트 및 provider등 유틸 컴포넌트등을 포함합니다.
- font
  - 프로젝트에서 사용하는 폰트를 저장합니다.
- hooks
  - 클라이언트의 컴포넌트 내에서 반복해서 사용하는 로직을 기능단위로 분리하여 관리합니다.
  - 클라이언트 컴포넌트에서 사용하는 고정 데이터를 저장합니다.
- slice
  - redux의 slice를 포함합니다.
- types
  - 프로젝트에서 반복해서 사용하는 타입이나 데이터 인터페이스를 포함합니다.
- utils
  - 여러 라이브러리에서 필요한 함수와 각종 비즈니스 로직 계산 함수등을 포함합니다.


