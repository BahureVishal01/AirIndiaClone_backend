const express = require('express');
const app = express();
const apiRouter = require("./src/routes/index");
const {connect} = require("./src/config/database");
const User = require("./src/models/user");
app.use("/api", apiRouter)
app.get('/', (req, res)=>{
    res.status(200);
    res.send({
        success: true,
        message: "Api is hitting to the server..."
    });
})

app.listen(3000, async()=>{
   // this callback will be executed everyTime  when the server is started.
    await connect();
    console.log("Application is started successfully..");
    console.log("MongoDB is connected successfully");
    try{
    let user = await User.create({
          name: "vish007",
          email:"abc@gmail.com",
          password:"Password01"
    });
    console.log("user is created", user);
  }catch(err){
     console.log("user is not added.")
  }
})