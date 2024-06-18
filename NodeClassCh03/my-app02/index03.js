const express = require('express');
const url = require('url');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.get("/comments", (req, res) => {
  const reqParam = url.parse(req.url, true).query;
  const result = { pageNum: reqParam["page-num"], keyword: reqParam.keyword };
  res.json(result);
});

app.post("/comments", (req, res) => {
  const { title, writer, content } = req.body;
  console.log(req.body);
  console.log(title, writer, content);

  res.json({ title: title, writer: writer, content: content});
});

app.put("/comments", (req, res) => {
  const { no, title, writer, content } = req.body;
  console.log(no, title, writer, content);

  res.json({ no: no, title: title, writer: writer, content: content, update: "OK"});
});

app.delete("/comments", (req, res) => {
  const no = req.body.no;
  console.log(no);

  res.json({ no: no, delete: "OK"});
});

app.all("/all", (req, res) => {
  res.json({ uri: "/all", msg: "OK"});
});



app.get("/comments/:no/:pageNum", (req, res) => {
  const no = req.params.no;
  const pageNum = req.params.pageNum;

  res.json({ no: no, pageNum: pageNum });
})

app.listen(3000, () => {
  console.log("서버시작")
})