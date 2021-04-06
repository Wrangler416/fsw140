const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IssueSchema = new Schema({
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
  },

  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      count: {
        type: String,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('Issue', IssueSchema)