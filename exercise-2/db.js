const Sequelize = require('sequelize');
const databaseUrl = 'postgres://postgres:6772@localhost:5432/postgres';
const db = new Sequelize(databaseUrl);
// const Movie = require('./model');

db.sync()
  // getting error when trying to create the rows
  //   .then(() => {
  //     Movie.create({
  //       title: 'Matilda',
  //       yearOfRelease: 1996,
  //       synopsis:
  //         'Matilda shares a home with her parents and brother, who do not appreciate her. When her principal tortures her and a kind-hearted teacher, she uses her telekinetic powers to settle scores.'
  //     }),
  //       Movie.create({
  //         title: 'Midsommar',
  //         yearOfRelease: 2019,
  //         synopsis:
  //           'A couple travel to Sweden to visit their friends rural hometown for its fabled midsummer festival, but what begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.'
  //       }),
  //       Movie.create({
  //         title: 'Bacurau',
  //         yearOfRelease: 2019,
  //         synopsis:
  //           'After the death of her grandmother, Teresa comes home to her matriarchal village in a near-future Brazil to find a succession of sinister events that mobilizes all of its residents.'
  //       });
  //   })
  .then(() => console.log('database has been updated'))
  .catch(error => console.log(error));

module.exports = db;
