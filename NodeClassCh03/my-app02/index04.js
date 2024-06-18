import express from 'express';

import commentRouter from './routers/commentRouter.js';
import noticeRouter from './routers/noticeRouter.js';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

app.use("/comments", commentRouter);

app.use("/notices", noticeRouter);

app.listen(3000, () => {
  console.log("서버시작");
})