# Day-1

## 1. babel
: 최신 ES6, ES7 버전의 javascript코드를, ES5버전의 코드로 바꾸어주는 Node.js 패키지  
→ 자주 변하는 js 최신 코드를 이해하지 못하는 웹 브라우저에서도 페이지에 접속할 수 있도록 해줌  
```terminal
# @babel/node: Node.js 커멘드 라인에서 사용하는 명령어를 사용할 수 있게 해줌 ( node → babel-node )
npm install @babel/node

# @babel/core: 바벨의 핵심기능이 담겨있는 기본 라이브러리
npm install @babel/core

# @babel/cli: 커맨드 라인에서 바벨을 실행할 수있는 라이브러리
npm install @babel/cli

# @babel/preset-"" : 바뀌어야 하는 코드를 검사하는 규칙
npm install @babel/preset-env (기본 js코드 검사)
npm install @babel/preset-flow (플로우 코드 검사)
npm install @babel/preset-typescript (타입스크립트 코드 검사)
npm install @babel/preset-react (리액트 코드 검사)
```

## 2. nodemon
: Node.js 기반의 어플리케이션 개발시 파일 변경이 감지될 때 자동으로 재시작하도록 도와주는 툴  
→ package.json이나 nodemon.json에서 설정  
```json
{
    // 프론트엔트 수정 시 재실행 X
    "ignore": ["/src/frontend"],
}
```

## 3. express.static
: Express의 기본 제공 미들웨어 함수이며, 이미지, CSS 파일 및 JavaScript 파일과 같은 정적 자산(asste)을 제공하기 위해 사용  
</br>
(📝 미들웨어 함수란? request에 대한 response를 완수하기 전까지 중간 처리를 할 수 있도록 하기 위한 함수로, response 후 죽음)  

