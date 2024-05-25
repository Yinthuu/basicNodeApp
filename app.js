const express = require('express');

const app = express();

app.get('/success', (req, res) => {
    res.status(200).json({ message: 'Success!' });
});


app.get('/fail', (req, res) => {
    res.status(500).json({ error: 'Internal Server Error' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
