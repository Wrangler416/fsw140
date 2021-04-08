const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/Comment")
const jwt = require("jsonwebtoken")

commentRouter.route("/").get((req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})


commentRouter.route("/addComment/:issueID").post((req, res, next) => {
    req.body.user = req.user._id
    req.body.issue = req.params.issueId

    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedComment)
    })
})

commentRouter.delete("/deleteComment/:issueID", (req, res, next) => {
    Comment.findOneAndDelete(
        {_id: req.params.commentID, issueID, user: req.user._id}, 
        (err, deletedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send("you deleted a comment")
        }
    )
})

    

module.exports = commentRouter