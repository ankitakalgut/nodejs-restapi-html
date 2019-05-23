const express=require('express')
const app=express()
const router=require('./router.js')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/people')
mongoose.Promise=global.Promise
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public/welcome.html'))
const morgan =require('morgan');
app.use(morgan('short'));


// get a list of ninjas from the db

app.use('/api', require('./router.js'));

app.get("/", (req, res) => 
{
    res.sendFile(__dirname + "/public/welcome.html");
});
// error handling middleware
app.use(function(err, req, res, next){
//console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

app.listen(5000,()=>
{
    console.log("We are connected to server")
})

module.exports=app;