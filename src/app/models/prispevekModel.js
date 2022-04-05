const path = require('path');

const jsondb = require('simple-json-db');

const db = new jsondb(path.join(__dirname, '..', '..', '..', 'data', 'prispevky.json'))

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
            vysledek.push(data[id]);
        }
    }

    return vysledek;
};