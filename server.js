const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

app.listen(process.env.PORT || 2023, () => console.log('LISTENING PORT NUMBER 2023'));
