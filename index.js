const { Wallet, utils, providers: { JsonRpcProvider } } = require('ethers');
const express = require('express');
const app = express();
const cors = require('cors');
const {PORT} = require('./config');
const {getLatestBlock} = require('./getLatestBlock');

app.use(cors());
app.use(express.json());


app.post('/', async (req, res) => {
    const {method} = req.body;
    if(method === "getLatestBlock"){
        const block = await getLatestBlock();
        res.send({ blockNumber: (block) });
        return;
    }
});

app.listen(PORT,  () => {
    console.log(`Listening on port ${PORT}!`);
});
