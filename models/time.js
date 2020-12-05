const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const timeSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: `Enter a name for transaction`
    },
    value: {
        type: Number,
        required: `Enter an amount`
    },
    date: {
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    }
});

const Time = mongoose.model(`Time`, timeSchema);

module.exports = Time;