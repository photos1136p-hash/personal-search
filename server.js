const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Define a route for web search
app.get('/search', (req, res) => {
    const query = req.query.q;
    // Implement your search logic here
    res.send(`Search results for: ${query}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});