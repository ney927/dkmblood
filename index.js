const express = require('express');
 
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple Node App is ' + 'running on this server')
    res.end()
})
 
// Port Number
const PORT = process.env.PORT ||3000;
 
// Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}\nhttp://localhost:${PORT}/home.html\nhttp://localhost:${PORT}/login.html\nhttp://localhost:${PORT}/mission.html\nhttp://localhost:${PORT}/profile.html`));
console.log(`http://localhost:${PORT}/searchDonors.html`);
console.log(`http://localhost:${PORT}/viewUsers.html`);
app.use(express.static('public'));
app.use(express.json());
const fs = require('fs')

//to use POST forms
const parseUrl = require('body-parser')
const encodeUrl = parseUrl.urlencoded({ extended: false })
app.get('/get-users', async function(request, response){
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    response.json(data.users);
});

app.get('/get-diagnoses', async function(request, response){
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    response.json(data.users);
});

app.get('/get-donations', async function(request, response){
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    response.json(data.blood_donations);
});