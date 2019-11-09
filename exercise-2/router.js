const { Router } = require('express');
const Movie = require('./model');
const router = new Router();

router.post('/movie', (req, res, next) => {
  Movie.create(req.body)
    .then(movie => res.status(201).send(movie))
    .catch(error => next(error));
});

router.get('/movie', (req, res) => {
  Movie.findAll()
    .then(movie => res.status(201).send(movie))
    .catch(error => next(error));
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(movie => {
      if (!movie) {
        res.status(404).end();
      } else {
        res.status(201).json(movie);
      }
    })
    .catch(error => next(error));
});

router.put('/movie/:id', (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(movie => {
      if (movie) {
        movie.update(req.body).then(movie => res.status(201).json(movie));
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error));
});

router.delete('/movie/:id', (req, res, next) => {
  Movie.destroy({ where: { id: req.params.id } })
    .then(numberOfMoviesDeleted => {
      if (numberOfMoviesDeleted === 0) {
        res.status(404).send({ message: 'Movie not found' });
      } else {
        res.status(201).send({ message: 'Movie deleted' });
      }
    })
    .catch(error => next(error));
});

module.exports = router;
