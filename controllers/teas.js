const express = require('express')
const db = require('../models')
const router = express.Router()


// GET /teas/home -----> home.ejs
router.get('/', (req, res) => {
    db.tea.findAll({
      // where: { id: req.params.id },
      include: [db.user, db.comment]
    })
    .then((tea) => {
      if (!tea) throw Error()
    //   console.log(tea.type)
    //   res.send(tea)
      res.render('teas/home.ejs', { tea: tea })
    })
    .catch((error) => {
      console.log(error)
    })
  })
  
  router.get('/new', (req,res) => {
    res.render('teas/new.ejs')
  })
  
  // ADDED a new type of tea by the user
  router.post('/new', (req,res)=>{
    // console.log('req.body', req.body)
    db.tea.create({
        name: req.body.name,
        type: req.body.type,
        userId: res.locals.user.id,
        source: req.body.source,
        varities: req.body.varities,
        advantages: req.body.advantages,
        color: req.body.color,
        origin: req.body.origin,
        // include: [db.comment]
    }).then(response=>{
      res.redirect('/teas');

    })
  })
  router.delete('/:teaId', async (req,res) => {

    //We need to delete tea type with id
    await db.tea.destroy({
        where: { id: req.params.teaId }
    })
    res.redirect('/teas')
})
  
    router.get('/:teaId', (req, res) => {
      db.tea.findOne({
        where: { id: req.params.teaId },
        include: [db.comment, db.user]
      })
      .then((response) => {
        if (!response) throw Error()
      //   console.log(tea.type)
        // res.send(response)
        res.render('teas/show', { tea: response })
      })
      .catch((error) => {
        console.log(error)
      })
    })
  
  router.post('/:id/comment', async (req, res)=> {
    let comment = await db.comment.create({
      comment: req.body.comment,
      teaId :req.params.id,
      name: req.body.name
    })
    
    let user = await db.user.findByPk(res.locals.user.id)
    
    user.addComment(comment)
    
    res.redirect(`/teas/${req.params.id}`)
    
    // try{
      //   db.comment.create({
        //     description: req.body.description,
        //     teaId :req.params.id
        //   })
        //   .then((comment, created) =>{
          

          
          //   });
          // }catch (err){
            //   console.log(err);
            // }
          })
          
          
          module.exports = router
          