const express = require('express');
const url = require('url');
const createError = require('http-errors');

const app = express();

app.use((req, res, next) => {
  console.log("첫 번째 미들웨어 입니다.");
  next();
});

let requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

app.get("/main", (req, res) => {
  const user = url.parse(req.url, true).query;
  console.log(user);

  res.json({ name: user.name + ' 한글', age: user.age, reqTime: req.requestTime});
});

app.use("/list", (req, res) => {
  res.setHeader('Content-type', 'text/html; charset=utf-8'); // 응답 헤더 설정
  res.end(`<h1>여기는 리스트</h1>
    <ul>
      <li>app.use(/list, (req, res) => { })로 라우팅</li>
    </ul> `);
});

app.use((req, res, next) => {
  next(createError(404));
});

app.listen(3000, () => {
  console.log(`서버시작`)
})