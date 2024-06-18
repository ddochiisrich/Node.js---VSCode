const express = require('express');
const url = require('url');

const app = express();

app.get("/main", (req, res) => {
  const user = url.parse(req.url, true).query;
  console.log(user);
})