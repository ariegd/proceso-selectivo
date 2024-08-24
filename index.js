const express = require('express');
const app = express();
const port = process.env.PORT;
const interceptor_cors = require('./middleware/interceptor_cors').interceptor_cors;


app.use(interceptor_cors);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});