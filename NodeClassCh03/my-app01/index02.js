// 미들웨어 (Middleware)
const express = require('express')
const url = require('url')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/main", (req, res) => {
  // localhost:3000/main?name=홍길동&age=33
  const user = url.parse(req.url, true).query;
  console.log(user);
  res.json({name: user.name + " - 한글", age: user.age});
});

app.get("/list", (req, res) => {
  res.setHeader("Content-type", "text/html; charset=UTF-8");
  res.end(`<h1>여기는 리스트</h1>
            <ul>
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>JSON</li>
            </ul>`)
});

app.listen(port, () => {
  console.log(`Express 서버 시작 - OK - http://localhost:${port}`);
})