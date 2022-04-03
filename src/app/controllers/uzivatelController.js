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
