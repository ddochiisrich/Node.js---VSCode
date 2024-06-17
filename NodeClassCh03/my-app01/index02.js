// 미들웨어 (Middleware)
const express = require('express')
const url = require('url')
const createError = require('http-errors');

const app = express()
const port = 3000

// 첫 번째 미들웨어
app.use((req, res, next) => {
  console.log("첫 번째 미들웨어...");
  next();
});

// 두 번째 미들웨어 정의
let requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
}

app.use(requestTime);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/main", (req, res) => {
  // localhost:3000/main?name=홍길동&age=33
  const user = url.parse(req.url, true).query;
  console.log(user);
  res.json({name: user.name + " - 한글", age: user.age, reqTime: req.requestTime});
});

app.use("/list", (req, res) => {
  res.setHeader("Content-type", "text/html; charset=UTF-8");
  res.end(`<h1>여기는 리스트</h1>
            <ul>
              <li>app.use("/list", (req, res) => {}) 라우팅</li>
            </ul>`)
});

// 요청 페이지가 없을 때 - 에러를 발생시키는 미들웨어
app.use((req, res, next) => {
  next(createError(404));
})

app.listen(port, () => {
  console.log(`Express 서버 시작 - OK - http://localhost:${port}`);
})