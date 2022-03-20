# 🔐 Nest로 인증 시스템 만들기

## 1. auth 모듈, 컨트롤러, 서비스 생성
```terminal
npm g module auth
npm g controller auth --no-spec
npm g service auth --no-spec
```

## 2. User를 위한 Entity 생성
: 유저에 대한 인정을 하는 것이기 때문에 유저 엔티티 생성  
```text
1. user.entity.ts 생성
2. 파일 소스 코드 작성
```

## 3. Repository 생성
: User Entity를 생성, 수정, 삭제 등의 로직을 처리하기 위해 Repository 생성  
```text
1. user.repository.ts 생성
2. 소스 코드 작성
```

## 4. User Repository 등록
: 생성된 UserRepository를 다른 곳에서 사용하기 위해 auth module에서 imports 안에 UserRepository를 넣어줌  

## 5. Repository Injection
: User Repository를 auth Service 안에서 사용하기 위해서 UserRepository를 넣어줌  