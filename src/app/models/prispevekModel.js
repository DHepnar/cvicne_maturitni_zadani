const path = require('path');

const jsondb = require('simple-json-db');

const db = new jsondb(path.join(__dirname, '..', '..', '..', 'data', 'prispevky.json'));

if(!db.has('next_id')) {
    db.set('next_id', 1);
}

exports.pridat = (nadpis, telo, autor) => {
      let id = db.get('next_id');

      db.set('next_id', id + 1);

      db.set(id, {
        nadpis,
        telo,
        autor,
      });

};

exports.nacistVsechny = (autor) => {
    let vysledek = [];

    let data = db.JSON();

    for(let id in data) {
        if(data[id].autor == autor) {
            data[id].id = id;
            vysledek.push(data[id]);
        }
    }

    return vysledek;
};

exports.nacistJeden = (id) => {
    let prispevek = db.get(id);

    prispevek.id = id;

    return prispevek;
};

exports.smazat = (id) => {
    db.delete(id);
};

exports.zverejnit = (id) => {
    let prispevek = db.get(id);

    prispevek.verejny = true;

    db.set(id, prispevek);
};

exports.nacistVerejne = () => {
    let vysledek = [];

    let data = db.JSON();

    for(let id in data) {
        if(data[id].verejny) {
            vysledek.push(data[id]);
        }
    }
    return vysledek;
};