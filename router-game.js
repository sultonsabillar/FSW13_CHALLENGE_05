// Import Module
const express = require('express');

const gameRouter = express.Router({caseSensitive: false});

gameRouter.get('/', (req, res) => {
  res.status(200).render('game.ejs');
})

module.exports = gameRouter;