const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WishSchema = Schema({
    wish:String
});

mongoose.model("Wishes",WishSchema)

module.exports = WishSchema

