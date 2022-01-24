const Joke = require('./models/jokes.model')

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => res.json({ jokes: allDaJokes}))
        .catch(err => res.json({ message: "something went wrong", error: err}));
}

module.exports.findOneSingleJoke => (req, res) => {
    Joke.findOne({_id: req.params.id })
        .then(oneSinglejoke => res.json({ joke : oneSinglejoke}))
        .catch(err => res.json({ message: "something went wrong", error: err}))
}

module.exports.