// main/src/db.js
const Datastore = require('nedb-promises');
const path = require('path')


console.log(__dirname)
console.log(__filename)

const dbFactory = (name) => Datastore.create({
  filename: name,
  timestampData: true,
  autoload: true
});

const db = {
    notes: dbFactory('notes.db')
  };
  module.exports = db;

  //filename: `${isDev ? '.' : app.getAppPath('userData')}/data/${fileName}`, 