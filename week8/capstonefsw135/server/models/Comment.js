const mongoose = require("mongoose")
const Schema = mongoose.Schema


const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imgUrl: {
        type: String
    }
   
})

module.exports = mongoose.model("Comment", commentSchema)

