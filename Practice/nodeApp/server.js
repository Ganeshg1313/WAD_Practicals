const express = require('express');
const path = require('path');
const fs = require("fs")

const app = express();
const PORT = process.env.PORT || 3000;

// Set up static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the index.html file
app.get('/about', (req, res) => {
    fs.appendFile("./log.txt", `${req.ip}\n`, (err)=>{
        if(err){
            console.log(err);
        }else{
            res.sendFile(path.join(__dirname, 'public', 'about.html'));
        }
    })
    
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});