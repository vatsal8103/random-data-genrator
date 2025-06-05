const express = require('express')
const app = express()
const mongoose = require('mongoose')
const employee = require('./models/employee')
mongoose.connect('mongodb://localhost:27017/company')
const port = 3000


app.set('view engine', 'ejs');
const getrandom = (arr) => {
    let rno = Math.floor(Math.random() * arr.length);
    return arr[rno];
};

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });

})
app.get('/generate', async (req, res) => {
    await employee.deleteMany({});


    let randomnames= ["vatsal", "sachin", "saurabh", "prashant", "satyam", "siddharth", "priyanshu", "shubham"];
    let randomcities = ["raipur", "delhi", "mumbai", "banglore", "hyderabad", "chennai", "kolkata"];
    let randomlanguages = ["python", "java", "javascript", "c++", "c#", "ruby", "go"];
    for (let index = 0; index < 1; index++) {
        let e = await employee.create({
            name: getrandom(randomnames),
            salary: Math.floor(Math.random()* 22000 ),
            language: getrandom(randomlanguages),
            city: getrandom(randomcities),
            isManager: (Math.random() > 0.5) ? true : false
        });
        console.log(e);
    }
    res.render('index', { title: 'Home Page' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
