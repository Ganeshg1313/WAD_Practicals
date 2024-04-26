const express = require('express');
const path = require('path');

const app = express();
const port = 8000; // You can change the port number if needed

// Define the directory where static files (including index.html) are located
app.use(express.static(path.join(__dirname, 'public')));

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
