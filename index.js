const express=require("express");
const app=express();

require("dotenv").config();
const PORT = process.env.PORT || 7000;

app.use(express.json());

const UserRoutes=require("./routes/userRoutes");

app.use("/api/v1",UserRoutes);

app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);

})

const DBconnect=require("./config/connectDB");
DBconnect();

app.get("/",(req,res)=>{
    res.send(`<h1>This is the hoomepage </h1>`);
})