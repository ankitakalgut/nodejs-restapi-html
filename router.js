const express=require('express')
const router=express.Router();
const Ninja = require('./model/user');
const app = require('./app.js');

// add a new ninja to the db  
router.post('/ninjas', function(req,res,next)
{  
     Ninja.create(req.body).then (function(ninja)
    {
         //res.send (ninja);
         res.sendFile(__dirname +"/public/login.html");
    })
     //console.log(req.body.name)
    //res.sendFile(__dirname +"/public/index.html");
    //res.send("save");
 })

 // find a note
router.get('/ninjas/:name',function(req, res,next)
{
   Ninja.findById({_id:req.params.name}).then(function(ninja)
    {
        res.send(ninja);
    })
    .catch(err=>
    {
            res.send(" item not found")
    });
})
//delete a note
router.delete('/ninjas/:name',function(req,res,next)
{
    Ninja.findByIdAndRemove({_id:req.params.name}).then(function(ninja)
    {
        res.send("note deleted");
    }).catch(err=>
{
 
    res.send(" item not found")   
})


})
module.exports = router;