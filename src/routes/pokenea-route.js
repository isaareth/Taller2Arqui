const express = require('express');
const router = express.Router();
const { getPokeneaJson, getPokeneaImageAndPhrase } = require('../controllers/pokenea-controller');

router.get('/card', getPokeneaImageAndPhrase);
router.get('/json', getPokeneaJson);

module.exports = router;