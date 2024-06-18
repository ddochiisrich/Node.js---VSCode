import express from "express";

import commentRouter from "./routers/commentRouter.js"
import noticeRouter from "./routers/noticeRouter.js"

const app = express();

// req.body 들어오는 데이터를 처리하는 미들웨어
app.use(express.json());

// post 요청으로 들어올 떄 Content-type이 application/x-www-form-urlencoded인
// 경우 파싱해 주는 설정 json 미들웨어와 같이 사용
app.use(express.urlencoded({extended: true}));

// CSS, JavaScript, html, 이미지 파일등의 정적 파일을 제공하기 위한 설정
app.use(express.static("public"));

app.use("/comments", commentRouter);

app.use("/notices", noticeRouter);

app.listen(3000, () => {
  console.log(`Express 서버 시작 - OK - http://localhost:3000`);
})