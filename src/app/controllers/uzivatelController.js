const { render } = require("..");

exports.zobrazPrihlasit_page = (dotaz, odpoved) => {
    odpoved.render('uzivatel/prihlasit_page'); 
};
exports.zobrazRegistrovat_page = (dotaz, odpoved) => {
    odpoved.render('uzivatel/registrovat_page'); 
};
exports.registrovat = (dotaz, odpoved) => {
    odpoved
}