const express = require('express')
const db = require('../models')
const router = express.Router()



router.get('/', (req, res) => {
    db.tea.findAll({
    //   where: { id: req.params.id },
    //   include: [db.user, db.comment]
    })
    .then((tea) => {
      if (!tea) throw Error()
    //   console.log(tea.type)
    //   res.send(tea)
      res.render('teas/show', { tea: tea })
    })
    .catch((error) => {
      console.log(error)
    })
  })

module.exports = router
