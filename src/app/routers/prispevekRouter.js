const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'prispevekController'));

router.get('/pridat_page', controller.zobrazPridat_page);
router.get('/prehled_page', controller.zobrazPrehled_page);
router.post('/pridat', controller.pridat);
module.exports = router;