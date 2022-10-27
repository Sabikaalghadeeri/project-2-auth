const express = require('express')
const db = require('../models')
const router = express.Router()


router.post('/:id/new', async (req,res)=>{

    // Grab our tea
const tea = await db.tea.findByPk(req.params.id)
    // Create a comment
const [comment, created] = await db.comment.findOrCreate({
    where: {
        comment : req.body.comment
    }
})
    // Add our comment to the tea
await tea.addComment(newComment)
await res.locals.user.addComment(newComment)
    // redirect to tea page
    res.redirect(`/tea/${req.params.id}`)
})


module.exports=router