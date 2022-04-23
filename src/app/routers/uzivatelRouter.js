const path = require('path');

const express = require('express');

const router = express.Router();

const controller = require(path.join(__dirname, '..', 'controllers', 'uzivatelController'));

router.get('/prihlasit_page', controller.zobrazPrihlasit_page);
router.get('/registrovat_page', controller.zobrazRegistrovat_page);
router.post('/registrovat', controller.registrovat);
router.post('/prihlasit', controller.prihlasit);
router.get('/profil_page', controller.zobrazProfil_page);
router.get('/odhlasit', controller.odhlasit);

 

module.exports = router;