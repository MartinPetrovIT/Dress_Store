const express = require("express");
const expressConfig = require("./config/express")
const databaseConfig = require("./config/database")
const routesConfig = require("./config/routes")

const port = 3000;


async function start(){
    const app = express();
    expressConfig(app)
    routesConfig(app)
    databaseConfig()
    app.listen(port,() => console.log(`server is litening on port ${port}`))
}
start();