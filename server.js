const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middlewares/errorHandler');
const dbConnection = require('./config/dbConnect');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const swaggerDocs = require('./config/swagger');

const app = express();
const port = process.env.PORT || 5001;

//Connecting to database
dbConnection();

//middlewares
app.use(express.json());
app.use('/api/v1/contacts', contactRoutes);
app.use('/api/v1/users', userRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);

  swaggerDocs(app, port);
});
