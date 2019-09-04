const express        = require('express');
const app            = express();
const cors           = require('cors');
const bodyParser     = require('body-parser');

require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

const songController = require('./controllers/songController');

app.use('/api/v1/songs', songController);

app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
  });