const path = require('path');
const model = require(path.join(__dirname, '..', 'models', 'prispevekModel'))

exports.zobrazPridat_page = (dotaz, odpoved) => {
    odpoved.render('prispevky/pridat_page');
};
exports.zobrazPrehled_page = (dotaz, odpoved) => {
    let autor = dotaz.session.uzivatel;
    let prispevky = model.nacistVsechny(autor);
    
    odpoved.render('prispevky/prehled_page', {
        prispevky,

    });
};
exports.zobrazDetail_page = (dotaz, odpoved) => {
    let id = dotaz.params.id;
    let prihlaseny = dotaz.session.uzivatel;
    let autor = model.nacistJeden(id).autor;

    if(prihlaseny != autor) {
        return odpoved.redirect('/prispevky/prehled_page');
    }
    let prispevek = model.nacistJeden(id);

    odpoved.render('prispevky/detail_page', {
        prispevek,
    });
    
};
exports.pridat = (dotaz, odpoved) => {
    let nadpis = dotaz.body.nadpis;
    let telo = dotaz.body.telo;
    let autor = dotaz.session.uzivatel;

    model.pridat(nadpis, telo, autor);

    return odpoved.json({
        uspech:true,
        url: '/prispevky/prehled_page',
    });
};

exports.smazat = (dotaz, odpoved) => {
    let id = dotaz.params.id;
    let prihlaseny = dotaz.session.uzivatel;
    let autor = model.nacistJeden(id).autor;
    if(prihlaseny == autor) {
        model.smazat(id);
    }

    odpoved.redirect('/prispevky/prehled_page');
};

exports.zverejnit = (dotaz, odpoved) => {
    let id = dotaz.params.id;
    let prihlaseny = dotaz.session.uzivatel;
    let autor = model.nacistJeden(id).autor;

    if(prihlaseny == autor) {
        model.zverejnit(id);

    }

    odpoved.redirect('/prispevky/prehled_page')
};