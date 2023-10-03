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
app.listen(PORT,console.log(`Server started on port ${PORT}\nhttp://localhost:${PORT}/home.html\nhttp://localhost:${PORT}/login.html`));
app.use(express.static('public'));
app.use(express.json());