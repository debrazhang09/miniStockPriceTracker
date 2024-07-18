const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../client/dist')));


const port = 3000;
app.listen(port, function() {
  console.log(`listening on port ${port}...`);
});