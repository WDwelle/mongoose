const { Mongoose } = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: { type: string},
    punchline: { type: string}
}, { timestamps: true})

const Joke =mongoose.model('Joke', JokeSchema);