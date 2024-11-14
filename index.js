import express from "express"
import dotenv from "dotenv"
import authRoute from "./routes/auth.route.js"
import postsRoute from "./routes/posts.route.js"
import { connectDB } from "./connectDB/connectDB.js"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/posts',postsRoute)
app.use('/api/auth',authRoute)

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.listen(8000,()=>{
    connectDB()
    console.log("server is live at http://localhost:8000")
})