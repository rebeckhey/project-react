const express =  require('express') //hämtar express
const app = express() //initialiserar express
const cors = require('cors')
const shoppingItemController = require ('./controllers/shoppingItemController')
const userController = require ('./controllers/userController')


app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json()) //ger oss json tillbaka och gör att vi kan tolka det
app.use('/api/shoppingitems', shoppingItemController)
app.use('/api/users', userController)

    module.exports = app //exporterar app