const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.use(express.static('public'));

app.use(express.json());

app.post('/send-request', async (req, res) => {
    try {
        const result = await axios.post(`http://localhost:8000${req.body.url}`, req.body);

        res.send({ success: true, result: result.data });
    } catch (error) {
        console.log('my error');
        console.error(error);
        res.send({ success: false, error: error.message });
    }
});

app.listen(3050, () => console.log('Server started on port 3050'));