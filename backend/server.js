const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const catalogoRouter = require('./api/catalogo');
const mailerRouter = require('./api/nodeMailer');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors({
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
}));

app.use('/images', express.static('images'));

app.use('/catalogo', catalogoRouter);
app.use('/mailer', mailerRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

module.exports = app;