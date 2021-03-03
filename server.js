require('./modals/db');

const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const employeeController = require('./controller/employeeController');

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.set('views', path.join(__dirname, '/views/'))

app.engine('hbs', exphbs({ 
    extname: 'hbs', 
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}))

app.set('view engine', 'hbs')

app.listen(5000, () => {
    console.log('listning at', 5000)
})

app.use('/employee', employeeController);