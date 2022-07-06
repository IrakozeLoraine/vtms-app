require('./config/db').connect();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const ownerRouter = require('./routes/owners/owner.route');
const vehicleRouter = require('./routes/vehicles/vehicle.route');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/owners', ownerRouter);
app.use('/api/v1/vehicles', vehicleRouter);

module.exports = app;
