## core

### 개발환경 세팅 (windows)

#### git

https://git-scm.com/downloads

#### nodejs

https://nodejs.org/en/download/

#### yarn

https://yarnpkg.com/lang/en/docs/install/#windows-stable

#### vscode

https://code.visualstudio.com/download

#### database.net

https://fishcodelib.com/database.htm

#### chrome

https://www.google.com/chrome/

### 구동

#### 첫 구동

```bash
git clone http://github.com/kswgit/core
```

```bash
cd ui
yarn
yarn start
```

```bash
cd webapi
yarn
yarn dbinit
yarn start
```

#### 2+번째 구동

```bash
cd ui
yarn start
```

```bash
cd webapi
yarn start
```

http://localhost:8080