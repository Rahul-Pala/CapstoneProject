const express = require('express')
const app = express()
let cartoonRoutes = require('./routes/cartoonRoutes');
require("dotenv").config();
let dbConnect = require("./dbConnect");
app.use(express.json()); //Use to do put method.

app.use('/api/cartoons', cartoonRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MiniProject 3 application." });
    });

const port = process.env.PORT || 8080

app.listen(port, () => {console.log(`server running on port ${port}`)})
