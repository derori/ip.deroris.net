"use strict";

import express from "express";

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

// App
const app = express();
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal', '192.168.0.200']) // specify multiple subnets as an array

app.get("/", (req, res) => {
    res.send(req.ip);
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


