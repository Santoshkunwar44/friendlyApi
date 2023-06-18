const express =require("express")
require("dotenv").config()
const cors = require("cors")
const app = express()


cors({
    origin:"http://localhost:3000",
    methods:["GET","PUT","POST","DELETE","OPTIONS"],
    credentials:true
})



require("./utils/db")()
app.use(express.json())

app.use("/api/user",require("./routes/UserRoute"))




app.listen(8080,()=>console.log("server started"))