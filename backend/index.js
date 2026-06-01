const express = require('express');
const app = express();

app.use(express.json());

// test API
app.get('/', (req, res) => {
    res.send('Node.js backend is running 🚀');
});

// sample API
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello world' });
});
app.post('/api/echo', (req, res) => {
    const { message } = req.body;
    res.json({ echo: message });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});