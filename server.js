const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// dotenv configuration
dotenv.config()

// rest app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, './client/build')))

// routes
app.use("/api/v1/portfolio",require('./routes/portfolioRoute'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})

// ports
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})