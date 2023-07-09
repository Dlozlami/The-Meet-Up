const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const mongoose = require('mongoose');
const Attendees = require('../model/attendee.model'); 
const jwt = require('jsonwebtoken');
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"))


const secretKey = 'o8uhs7errqlosw830j#^*)N[]pekdjmslspw4rg564ryt3+67+651wqrqrqr414r[w0-iiwqokweidg8wqj2pss9tffb96ywaxboi-=[;k28uw4rq4ewfrqf+q';

mongoose.connect('mongodb://127.0.0.1:27017/the-meet-up')

app.get('/api/', function (req, res) {  
  res.send({message:"This is the home page"});
});

app.get('/api/schedule/', function (req, res) {  
  res.send({message:"This is the schedule"});
});

app.get('/api/schedule/wednesday', function (req, res) {
  res.send({message:"This is Wednesday"});
});

app.get('/api/schedule/thursday', function (req, res) {


});

app.get('/api/schedule/friday', function (req, res) {


});

app.post('/api/attendees/login', function (req, res) {

});

app.get('/api/attendees/:id', function (req, res) {
    const accountId = req.params.id;

});



app.post('/api/attendees/', async function (req, res) {
    const newAccount = req.body;
    
    try{
        const newEmployee = await Employee.create({
            emp_num: newAccount.id, 
            name: newAccount.name,
            surname: newAccount.surname,
            email: newAccount.email,
            password: newAccount.password,
            bio: newAccount.bio,
            pic: newAccount.pic,
            birthday:newAccount.birthday,
            position: newAccount.position,
            phone:newAccount.phone
        });
        res.json({status:'Goodly'});
    }
    catch(err){
        console.log(err);
        res.json({status:'Error my god...'});
    }
});


app.patch('/api/attendees/:id', function (req, res) {
    const accountId = req.params.id;
    const newData = req.body;

  });
  



  app.delete('/api/attendees/:id', function (req, res) {
    const accountId = req.params.id;
  

});




// Listening to server at port 5000
app.listen(5000, function () {
	console.log("server started...\nClick the url to gain access: http://localhost:5000/");
})