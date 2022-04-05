const path = require('path');
const model = require(path.join(__dirname, '..', 'models', 'uzivatelModel'))

exports.zobrazPrihlasit_page = (dotaz, odpoved) => {
    odpoved.render('uzivatel/prihlasit_page'); 
};

exports.zobrazRegistrovat_page = (dotaz, odpoved) => {
    odpoved.render('uzivatel/registrovat_page'); 
};

exports.registrovat = (dotaz, odpoved) => {
    let jmeno = dotaz.body.jmeno;
    let heslo = dotaz.body.heslo;

    if(model.existuje(jmeno)) {
        return odpoved.json({
            uspech: false,
            hlaseni: 'Toto jméno je obsazené',
        });
    }
    model.pridat(jmeno, heslo);

    return odpoved.json({
        uspech:true,
        url: '/uzivatel/prihlaseni_page',
    });
};

exports.prihlasit = (dotaz, odpoved) => {
    let jmeno = dotaz.body.jmeno;
    let heslo = dotaz.body.heslo;

    if(!model.existuje(jmeno)) {
        return odpoved.json({
            uspech:false,
            hlaseni: 'Uživatel neexistuje',
        });
    }

    if(!model.overit(jmeno, heslo)) {
        return odpoved.json({
            uspech:false,
            hlaseni: 'Chybné heslo',
        });
    }

    dotaz.session.uzivatel = jmeno;

    return odpoved.json({
        uspech:true,
        url: '/uzivatel/profil_page',
    });
};

exports.zobrazProfil_page = (dotaz, odpoved) => {
    if(!dotaz.session.uzivatel) {
        return odpoved.redirect('/uzivatel/prihlasit_page');
    }
    
    odpoved.render('uzivatel/profil_page', { 
        uzivatel: dotaz.session.uzivatel,
    });
};

exports.odhlasit = (dotaz, odpoved) => {
    dotaz.session.destroy();
    
    return odpoved.json({
        uspech: true,
        url: '/uzivatel/prihlasit_page',
    });
};