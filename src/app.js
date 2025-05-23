import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app =express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

//setting for incoming data in json format with a limit. app.use bcoz we are setting up a middleware
//limit is added to avoid crashing of server bcoz of incoming data
app.use(express.json({limit:"16kb"}))

//setting for incoming data in url format with a limit
app.use(express.urlencoded({extended:true,limit:"16kb"}))

//here publicis the folder we have created..We can put assets like images, favicon etc which can be accessed by anyone
app.use(express.static("public"))

app.use(cookieParser())

export {app}