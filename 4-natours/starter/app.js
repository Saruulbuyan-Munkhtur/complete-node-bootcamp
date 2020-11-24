const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes.js')
const userRouter = require('./routes/userRoutes.js')

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json())
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋')
  req.requestTime = new Date().toISOString();
  next();
})

// 2) ROUTE HANDLING

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/user', userRouter);


// 3) STARTING SERVER

module.exports = app; 