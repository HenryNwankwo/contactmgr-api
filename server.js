const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const routes = require('./routes/contactRoutes');

const port = process.env.PORT || 5001;

//middlewares
app.use('/api/v1/contacts', routes);

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
