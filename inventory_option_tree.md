```mermaid
flowchart TD
    %% 색상 정의
    classDef lock fill:#f59e0b,color:#fff,stroke:#b45309;
    classDef auto fill:#22c55e,color:#fff,stroke:#15803d;
    classDef free fill:#9ca3af,color:#fff,stroke:#4b5563;
    classDef neutral fill:#334155,color:#e2e8f0,stroke:#475569;

    %% 1. 재고관리
    A([재고관리 INV])
    B([비재고<br>LOT=N / EXP=N / SER=N / NARC=비마약])
    C([재고관리 함 → 마약류관리 NARC])
    A -->|N| B
    A -->|Y| C

    %% 2. 마약류관리 - 중점관리
    D([중점관리])
    D1([INV=Y]):::lock
    D2([LOT=Y]):::lock
    D3([EXP=Y]):::lock
    D4([SER=Y]):::lock
    C --> D
    D --> D1 & D2 & D3 & D4

    %% 3. 마약류관리 - 일반관리
    E([일반관리])
    E1([INV=Y]):::lock
    E2([LOT=Y]):::lock
    E3([EXP=Y]):::lock
    E4([SER=선택 (N 기본, Y 허용)]):::free
    C --> E
    E --> E1 & E2 & E3 & E4

    %% 4. 마약류관리 - 비마약
    F([비마약])
    C --> F

    %% 비마약 - 일련
    F1([일련 SER])
    F --> F1
    F1a([Y → INV=Y(고정)<br>LOT=선택(Y 기본, N 허용)<br>EXP=선택(Y 기본, N 허용)]):::auto
    F1b([N → 자유]):::free
    F1 --> F1a & F1b

    %% 비마약 - LOT
    F2([LOT])
    F --> F2
    F2a([Y → INV=Y(고정)<br>EXP=선택(N 기본, Y 허용)<br>SER=선택(N 기본, Y 허용)]):::auto
    F2b([N → 자유]):::free
    F2 --> F2a & F2b

    %% 비마약 - EXP
    F3([유효일자 EXP])
    F --> F3
    F3a([Y → INV=Y(고정)<br>LOT=선택(Y 기본, N 허용)<br>SER=선택(N 기본, Y 허용)]):::auto
    F3b([N → 자유]):::free
    F3 --> F3a & F3b

    %% 비재고 스타일
    B:::neutral
```
