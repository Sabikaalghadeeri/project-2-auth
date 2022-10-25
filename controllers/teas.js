const express = require('express')
const db = require('../models')
const router = express.Router()



router.get('/tea:id', (req, res) => {
    db.tea.findOne({
      where: { id: req.params.id },
      include: [db.user, db.comment]
    })
    .then((tea) => {
      if (!tea) throw Error()
    //   console.log(tea.type)
      res.send(tea)
    //   res.render('type-of-tea', { tea: tea })
    })
    .catch((error) => {
      console.log(error)
    })
  })