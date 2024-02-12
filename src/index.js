const express = require('express');
const apiRoute = require('./routes/routes');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = process.env.PORT || 3000;

const assetlinks = fs.readFileSync(path.join(__dirname + './../public/.well-known/assetlinks.json'))

// app.use(express.static('public'));
// app.use(express.json());
app.use('/whatsapp', apiRoute);
app.use('/ping', (req, res) => {
    res.sendFile(path.join(__dirname + './../public/index.html'));
});
app.use("/.well-known/assetlinks.json", (req, res) => {
    res.set('Content-Type', 'application/json')
    return res.status(200).send(assetlinks)
})
app.use('/', (req, res) => {
    return res.json({ message: "Api WhatsApp!"})
});

app.listen(PORT, () => console.log('Running in port ' +  PORT))