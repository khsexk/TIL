# 1. SQL과 NoSQL

# 2. DB 종류
### ❖ MySQL

### ❖ MongoDB

### ❖ PostgresSQL
&nbsp; Postgres라고도 불리는 PostgreSql은 "세계에서 가장 진보된 오픈소스 관계형 데이터베이스"라고 자부한다. 확장성이 뛰어나고 표준을 준수한다는 목표로 만들어진 PostgreSql은 객체 관계형(object-relational) DB, 즉 기본적으로는 관계형 데이터베이스지만 객체 데이터베이스와 연관되는 기능( ex.테이블 상속 및 함수 오버로딩)도 포함하고 있다.  
</br>
&nbsp; Postgres는 동시성(Concurrency)을 특징으로 갖고 있다. 동시성은 동시에 여러 작업을 효율적으로 처리할 수 있도록 하는데, 트랜잭션의 원자성(Atomicity), 일관성(Consistencty), 격리성(Isolation), 내구성(Durability)을 보장하는 MVCC(Multiversion Concurrency Control) 덕분에 읽기에 대한 잠금 없이 이를 달성할 수 있다.  
</br>
&nbsp; PostgreSql은 MySQL만큼 널리 사용되지는 않지만 pgAdmin 및 Postbird를 포함하여 PostgreSql 작업을 단순화하도록 설계된 타사 도구 및 라이브러리가 많다. 국내에서는 잘 사용하지 않지만, 북미와 일본에서 높은 인지도와 많은 인기를 얻고 있는 RDBMS라고 할 수 있다.  
</br>  

- ***장점***
    - (SQLite 또는 MySQL보다) 표준 SQL을 준수함
    - 오픈소스 및 커뮤니티가 이끄는 DB
        - 소스코드의 대부분인 대규모 헌신적인 커뮤니티에서 개발됨
        - Postgres 커뮤니티가 DBMS로 작업하는 방법을 설명하는 공식문서를 포함한 수많은 리소를 유지 관리하고 기여함
    - 확장성이 뛰어남
        - user가 카탈로그 기반 작업과 동적 로드 사용을 통해 PostgreSQL을 프로그래밍 방식으로 즉시 확장 가능
        - 공유 라이브러리와 같은 객체 코드 파일 지정 가능 및 필요에 따라 로드  

- ***단점***
    - 메모리 성능이 떨어짐
        - Because. 모든 새로운 client 연결에 대해 새로운 프로세스를 fork함
    - 인기도가 떨어짐  

- ***이럴 때 사용하자!***
    - 데이터 무결성이 중요한 경우
    - 다른 도구들과 통합되어야 하는 경우
    - 복잡한 작업 연산을 수행하는 경우
- ***이럴 땐 사용하지 말자...***
    - 속도에 민감한 경우
    - 간단한 설정이 필요한 경우
    - 간단한 복제 작업을 원하는 경우  

- **PostgresSQL 설치**: https://postgresapp.com/downloads.html
- **pgAdmin 설치**: https://www.pgadmin.org/download/


### ❖ Firebase


* * *

### 📝 참고자료
- [Simple is Beautiful.](https://smoh.tistory.com/370) 