const path = require('path');
const express = require('express');

const router = express.Router();
const controller = require(path.join(__dirname, '..', 'controllers', 'uzivatelController'));

router.get([
    'index.html',
    '/index',
    '/index.html',

],(dotaz, odpoved) => {
    odpoved.redirect('/uzivatel/profil_page');
});

router.get([
    '/uzivatel/profil_page',
    '/uzivatel/odhlasit',
    '/prispevky/pridat_page',
    '/prispevky/prehled_page',
    '/prispevky//detail_page/:id',
    '/prispevky/smazat/:id',
    '/prispevky/zverejnit/:id',
], (dotaz, odpoved, pokracovani) => {
    if(!controller.prihlaseny(dotaz)){
        odpoved.redirect('/uzivatel/prihlasit_page');
    } else {
        pokracovani();
    }
    
});

module.exports = router;