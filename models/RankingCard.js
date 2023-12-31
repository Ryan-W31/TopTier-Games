const mongoose = require("mongoose");

const RankingSchema = mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    GameId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    Ranking: {
        type: Number,
    },
    Review: {
        type: String,
    },
    ReviewDate: {
        type: Date,
    },
}, { collection: 'Rankings' });

const Ranking = module.exports = mongoose.model("RankingCard", RankingSchema);