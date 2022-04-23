const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'prispevekController'));

router.get('/detail_page/:id', controller.zobrazDetail_page);
router.get('/smazat/:id', controller.smazat);
router.get('/pridat_page', controller.zobrazPridat_page);
router.get('/prehled_page', controller.zobrazPrehled_page);
router.post('/pridat', controller.pridat);

module.exports = router;