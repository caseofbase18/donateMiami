const mongoose = require("mongoose");
const { string } = require("prop-types");
const Schema = mongoose.Schema;

const nonProfitsSchema = new Schema ({
    name: {
        type: String,
    },
    contact: {
        website:{
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
        address:{
            street: {
                type: String,
            },
            city:{
                type: String,
            },
            zipcode:{
                type: Number,
            },
            state:{
                type: String,
            }
        }
        
    },
    mission:{
        type: String,
    },
    category:{
        type: String,
    },
    imageURL:{
        type: String,
    },
    favorites: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "NonProfits",
    }]

});

const NonProfits  = mongoose.model("NonProfits", nonProfitsSchema);

module.exports = NonProfits;