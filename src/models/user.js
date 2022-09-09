const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
       type: String,
       required: true
    },
    createdAt: {
        type: String,
        immutable: true,
        default: ()=>{
            return Date.now();
        }
    },
    updatedAt: {
        type: String,
        default: ()=>{
            return Date.now();
        }
    }
})
module.exports = mongoose.model("User", userSchema);