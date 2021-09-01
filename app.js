// Import Module
const express = require('express');
const morgan = require('morgan');
const gameRouter = require('./router-game.js')

// Activate Express Module
const app = express();

// Port Declaration
const PORT = 3000;

// view engine / template engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use('/game', gameRouter)

// Routing (Enpoints and Handlers)
app.get('/', (req, res) => {
  res.status(200).render('./index.ejs');
})

// Internal Server Error Handler
app.use((err, req, res, next) => {
  console.log("Ada error")
  console.log(typeof err);
  if (err) {
    console.log(err);
  }
  res.status(500).json({
    status: 'error',
    error: err
  })
  next();
})

// 404 Handler
app.use((req, res, next) => {
  res.status(404).render('./404.ejs')
  next();
})

// Running Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (http://localhost:${PORT})`)
})
