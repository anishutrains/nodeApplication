const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route to serve the portfolio HTML page
app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
