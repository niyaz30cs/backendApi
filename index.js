const express=require("express");

const cors=require("cors");
const { routes } = require("./RoutesCompo/CategoryRoute");
const app=express();

app.use(cors({
    origin:"*"
}))

app.use("/api",routes)
app.listen(5000,()=>{
    try
    {
        console.log("server run on port no 5000");   
    }
    catch
    {
        console.log("some error on port no 5000");
    }
})