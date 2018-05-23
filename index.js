const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/test');

var db = mongoose.connection;
console.log('this is your db\n'+db.collectionNames);
db.on('error', console.log);

db.once('open', ()=>console.log('connected'));

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    interests: [String],
    organizations: [String],
    courses: [String]
});

let User = mongoose.model('users', userSchema);

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',async (req,res)=>{
    let result = await User.find({});
    res.json(result);
});

app.get('/test', async (req, res) => {
    // let result = await User.find({});
    res.send('hello');
});

app.post('/mongo',(req,res)=>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        interests: req.body.interests,
        organizations: req.body.organizations,
        courses: req.body.courses,
    });

    user.save((err,user)=>{
        if(err) console.error(err);
        else console.log('success');
        res.redirect('/');
    })
});

app.listen(port,()=>console.log('listen on port ' + port));
