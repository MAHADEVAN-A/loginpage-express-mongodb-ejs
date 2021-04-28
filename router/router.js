const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const form = require('../models/form')

router.get('/',async(req,res)=>{
    await form.find(function (err, person) {
        if (err) console.log(err);
        res.render('home',{person});
      });
})

router.post('/form',async(req,res)=>{
    console.log(req.body);
    await form.create(req.body, function (err, person) {
        if (err) console.log(err)
       form.find(function (err, person) {
           console.log(person)
            if (err) return next(err);
            res.render('home',{person});
          });
      });
    // res.end()
})

router.get('/getData',(req,res)=>{
    form.find(function (err, person) {
        if (err)  console.log(err);
        res.render('home',{person});
      });
})
// let personn
router.get('/deletePerson/:id',async(req,res)=>{
   await form.findByIdAndRemove(req.params.id, function (err, post) {
        if (err)  console.log(err);
         form.find(function (err, person) {
        if (err) console.log(err);
        // personn
        res.render('home',{person})

      });
      });
    //   console.log(personn)
    //   res.render('home',{person:personn});
})

module.exports = router;
