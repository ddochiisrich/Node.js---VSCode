import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import fs from 'fs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const __dirname = path.resolve();

const filePath = path.join(__dirname, 'date', 'students.json');
console.log(__dirname);
console.log(filePath);

app.set('view engine', 'html');

nunjucks.configure('./views', {
  watch: true,
  express: app
});

app.get("/", (req, res) => {
  res.render("variable", { message: "Hi Nunjucks", toDay: new Date()});
});

app.get("/if", (req, res) => {
  res.render("ifCondition", { isLogin: true, id: "admin", color: "red"});
});

app.get("/for", async (req, res) => {
  const fileData = fs.readFileSync(filePath);
  const sList = JSON.parse(fileData);

  res.render("forLoop", {sList: sList});
});

app.get("/main", (req, res) => {
  res.render("main", { data: "Include Page" });
  });

app.get("/blockContent", (req, res) => 
{
  res.render("blockContent", { title: "Block Content"});
})

app.listen(3000, () =>{
  console.log("서버시작");
})
