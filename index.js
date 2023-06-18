const express =require("express")
require("dotenv").config()

const app = express()
require("./utils/db")()
app.use(express.json())

app.use("/api/user",require("./routes/UserRoute"))




app.listen(8080,()=>console.log("server started"))