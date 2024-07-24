const express = require('express')
const cors = require("cors");
const app = express()
const corsOptions = {
    origin: "http://localhost:5173"
};
let userRoutes = require('./routes/userRoutes');
let attractionRoutes = require('./routes/attractionRoutes');
let showRoutes = require('./routes/showRoutes');
let queueRoutes = require('./routes/queueRoutes');
let adrenalineRoutes = require('./routes/adrenalineRoutes');
let serviceRoutes = require('./routes/serviceRoutes');

app.use(cors(corsOptions));
require("dotenv").config();
let dbConnect = require("./dbConnect");
app.use(express.json()); //Use to do put method.

app.use('/api/users', userRoutes);
app.use('/api/attraction', attractionRoutes);
app.use('/api/show', showRoutes);
app.use('/api/queue', queueRoutes);
app.use('/api/adrenaline', adrenalineRoutes);
app.use('/api/service', serviceRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MiniProject 3 application." });
    });

const port = process.env.PORT || 8080

app.listen(port, () => {console.log(`server running on port ${port}`)})
