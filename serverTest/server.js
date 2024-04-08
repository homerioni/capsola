const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.use(express.static('public'));

app.use(express.json());

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getResult(req, res) {
    let isHaveResult = false;
    while (!isHaveResult) {
        let respData;
        await axios.post(req.body.url, {id: req.body.id}, {headers: req.body.headers})
            .then((resp) => {
                respData = resp.data.response;
                if (resp.data.response !== 'CAPCHA_NOT_READY') {
                    isHaveResult = true;
                    res.send({ success: true, result: resp.data });
                }
            });
        if (respData === 'CAPCHA_NOT_READY') {
            await sleep(2000);
        }
    }
}

app.post('/send-request', async (req, res) => {
    try {
        const body = {
            click: req.body.click,
            task: req.body.task,
            type: req.body.type
        }
        const result = await axios.post(req.body.url, body, {headers: req.body.headers});

        res.send({ success: true, result: result.data });
    } catch (error) {
        console.log('my error');
        console.error(error);
        res.send({ success: false, error: error.message });
    }
});

app.post('/get-result', async (req, res) => {
    try {
        getResult(req, res)
    } catch (error) {
        console.log('my error');
        console.error(error);
        res.send({ success: false, error: error.message });
    }
});

app.listen(3050, () => console.log('Server started on port 3050'));