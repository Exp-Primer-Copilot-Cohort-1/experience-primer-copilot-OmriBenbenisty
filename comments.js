// Create web server

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let comments = {};

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const id = Date.now();
  comments[id] = req.body.comment;
  res.json({ id });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Test with curl
// curl localhost:3000/comments -X POST -d '{"comment": "This is a comment"}' -H "Content-Type: application/json"
// curl localhost:3000/comments
```

###