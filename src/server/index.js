const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const router = require('./api');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.cwd(), 'build')));
}

app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
