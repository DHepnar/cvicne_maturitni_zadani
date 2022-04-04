const path = require('path');

const bcrypt = require("bcrypt");
const jsondb = require('simple-json-db');
const { debug } = require('console');

const db = new jsondb(path.join(__dirname, '..', '..', '..', 'data', 'uzivatele.json'));

exports.existuje = (jmeno) => {
    return db.has(jmeno);  
};
exports.pridat = (jmeno, heslo) => {
    let hash = bcrypt.hashSync(heslo, 10);

    db.set(jmeno, {
        heslo: hash,
    });
};

exports.overit = (jmeno, heslo) => {
    let uzivatel = db.get(jmeno);
    let hash = uzivatel.heslo;

    return bcrypt.compareSync(heslo, hash);

};

exports.nacist = (jmeno) => {
    return db.get(jmeno);  
};

