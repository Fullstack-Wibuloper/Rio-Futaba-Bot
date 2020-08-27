
const mongoose = require("mongoose"),
Schema = mongoose.Schema,
config = require("../config.json");

module.exports = mongoose.model("Guild", new Schema({
    /* REQUIRED */
    id: { type: String }, // Discord ID of the guild
    registeredAt: { type: Number, default: Date.now() }, // Registered date of the member
    prefix: { type: String, default: config.prefix },
}));
