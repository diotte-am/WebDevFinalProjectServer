const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const session = require('express-session');



const app = express();
mongoose.connect('mongodb://localhost:27017/WebDevFinalProjectDB');

app.use(express.json());
app.use(cors());
app.use(session({
    secret: "secret",
    cookie: {secure: false}
}))


const userProfiles = require("./controllers/profiles-controller")
userProfiles(app);

const purchaseOrders = require("./controllers/purchase-order-controller")
purchaseOrders(app);

const shipping = require("./controllers/shipping-controller")
shipping(app);

app.listen(4000);

