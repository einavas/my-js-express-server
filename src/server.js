const express = require("express");
const dotenv = require("dotenv");
const logger = require("./v1/middleware/logger");

//Route files
const v1HomeRouter = require("./v1/routes/home");
const v1StudiesRouter = require("./v1/routes/studies");
//Load env configuration
dotenv.config({path: '../config/config.env'});

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(logger);
app.use("/api/v1/", v1HomeRouter);
app.use("/api/v1/", v1StudiesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${NODE_ENV} and listening on port ${PORT}`);
});