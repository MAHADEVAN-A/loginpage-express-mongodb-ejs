const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/router')
// const bodyparser = require('body-parser')
// const ejs = require('ejs')
// mongodb+srv://mahadevan:<password>@cluster0.xu12m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const app = express()
app.use('/static',express.static(__dirname + '/public'))
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({ extended: false }));

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)



mongoose.connect('mongodb+srv://mahadevan:password@cluster0.xu12m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));



app.listen(3000,()=>{
    console.log('Server listening on port 3000')
})
