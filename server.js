const express = require('express');
const { errorHandler } = require('./middlewares/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

connectDb();

const app = express();

const PORT = process.env.PORT || 5000;
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use('/api/health', ()=>resizeBy.json({msg:'ok'}));
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});