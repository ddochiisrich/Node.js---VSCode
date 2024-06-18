import express from 'express';
import url from 'url';

const router = express.Router();

router.get("/", (req, res) => {
  const reqParam = url.parse(req.url, true).query;
  const result = { pageNum: reqParam["page-num"], keyword: reqParam.keyword };
  res.json(result);
});

router.get("/:no/:pageNum", (req, res) => {
  const no = req.params.no;
  const pageNum = req.params.pageNum;

  res.json({ no: no, pageNum: pageNum});
});

router.post("/", (req, res) => {
  const { title, writer, content } = req.body;
  console.log(req.body);
  console.log(title, writer, content);

  res.json({ title: title, writer: writer, content: content });
});

router.put("/", (req, res) => {
  const { no, title, writer, content } = req.body;
  console.log(no, title, writer, content);

  res.json({ no: no, title: title, writer: writer, content: content, update: "OK"});
});

router.delete("/", (req, res) => {
  const no = req.body.no;
  console.log(no);

  res.json({ no: no, delete: "OK"});
});

export default router;