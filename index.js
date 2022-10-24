const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const db = require('./models')
const cryptoJS = require('crypto-js')
const axios = require('axios')
require('dotenv').config()

// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

// AUTHENTICATION MIDDLEWARE
app.use(async (req, res, next)=>{
    if(req.cookies.userId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.SECRET)
        const decryptedIdString = decryptedId.toString(cryptoJS.enc.Utf8)
        const user = await db.user.findByPk(decryptedIdString)
        res.locals.user = user
    } else res.locals.user = null
    next()
})

// CONTROLLERS
app.use('/users', require('./controllers/users'))


app.get('/teas', (req,res)=>{
    try {

        // axios.get('https://tea-collection.herokuapp.com/types_of_tea')
        axios.get('https://tea-collection-api.herokuapp.com/types_of_tea')
        // .then(response => response.json())
        .then(resp => {
            console.log(resp.data);
            res.send(resp.data)
        });
    } catch(err) {
        res.send(err)
    }
})
    
// ROUTES
app.get('/', (req, res)=>{
    res.render('home')
})



app.listen(8000, ()=>{
    console.log('Project 2 Express Authentication')
})