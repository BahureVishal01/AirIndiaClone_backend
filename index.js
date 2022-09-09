const express = require('express');
const app = express();
const apiRouter = require("./src/routes/index");

app.use("/api", apiRouter)
app.get('/', (req, res)=>{
    res.status(200);
    res.send({
        success: true,
        message: "Api is hitting to the server..."
    });
})

app.listen(3000, ()=>{
    console.log("Application is started successfully..");
})