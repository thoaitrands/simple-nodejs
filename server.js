const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to your Node.js Web Server!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
