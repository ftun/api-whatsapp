const express = require('express');
const apiRoute = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/whatsapp', apiRoute);
app.use('/', (req, res) => {
    return res.json({ message: "Api WhatsApp!"})
});

app.listen(PORT, () => console.log('Running in port ' +  PORT))