const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/indexRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
