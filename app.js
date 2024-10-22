import express from "express";
import userRoute from "./routes/user.routes.js"

const app = express()

app.use("/user", userRoute)

app.listen(3000, ()=>{
    console.log("server is running at port 3000" )
})

app.get("/", (req, res)=>{
    res.send("how are you")
})