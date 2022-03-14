# TypeORM이란?

### ✎ 정의
: node js에서 실행되고 TypeScript로 작성된 객체 관계형 매퍼 라이브러리

### ✎ 지원 DB
- MySQL
- PostgreSQL
- MariaDB
- SQLite
- MS SQL Server
- Oracle
- SAP Hana 및 WebSQL  
과 같은 여러 DB 지원

### 📝 ORM(; Object Relational Mapping)이란?
: 객체와 관계형 DB의 데이터를 자동으로 변형 및 연결하는 작업  
→ 객체와 DB의 변형에 유연하게 사용 가능  

- Pure JS code
```javascript
db.query('SELECT * FROM boards WHERE title="Hello" AND status="PUBLIC", (err, result) => {
    if(err){
        throw new Error("Error");
    }
    boards = result.rows;
});
```  
- TypeORM
```javascript
const boards = Board.find({
    title: "Hello",
    status: "PUBLIC",
});
```

### ✎ TypeORM 특징과 이점
- ***특징***
    - model을 기반으로 DB table 체계를 자동으로 생성
    - DB에서 개체를 쉽게 CRUD 할 수 있음
    - table 간의 매핑(1:1, 1:N, N:M)을 만듦
    - 간단한 CLI 명령 제공  
- ***이점***
    - 간단한 코딩으로 ORM framework 사용이 쉬움
    - 다른 모듈과 쉽게 통합됨  

### ✎ TypeORM을 사용하기 위해 설치해야 하는 모듈
```terminal
npm install pg typeorm @nestjs/typeorm
```
- **@nestjs/typeorm**: Nest js에서 TypeORM을 사용하기 위해 연동시켜주는 모듈
- **typeorm**: TypeORM 모듈
- **pg**: Postgres 모듈 (실습 DB를 PostgreSQL 사용)

#### [Document](https://docs.nestjs.com/techniques/database)

 ### 📝 TypeORM을 application에 연결하기
 **1. TypeORM 설정파일 생성**  
 <img src='./img/typeormConfig.png' width=384>  

 **2. TypeORM 설정파일 작성**  
 ```typescript

 ```
 - **synchronize**: true 값을 주면 application을 다시 실행할 때, 엔티티 안에 수정된 컬럼의 값이 타입 변경값 등을 해당 테이블을 Drop한 후 다시 생성해줌   

 **3. root Module에서 Import** 
```typescript
@Module({
    imports: [
        TypeOrmModule.forRoot(typeORMConfig),
        BoardsModule
    ],
})
export class AppModule {}
```  
- forRoot 안에 넣어준 설정(configuration)은 모든 Sub-Module 부수적인 모듈들에 다 적용됨