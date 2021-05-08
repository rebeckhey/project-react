const app = require ('./app') //importerar app
const mongoose = require ('mongoose')
require ('dotenv').config()

const PORT = process.env.PORT || 9090 //sätter port
const URL = 'http://localhost:' + PORT  //url till db 
const connectionString = process.env.CONNECTION_STRING //hämtar connection-string från env

// app.get('/', (request, response) => {

// })

// app.get('/po', (request, response) => {

// })
app.listen(PORT, () => console.log(URL))

mongoose  // hjälper till och ansluter till databasen
.set('useCreateIndex', true) 
.connect(connectionString, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }, () => console.log('connected'))  //skriver ut när vi har kopplat till databasen