import express from 'express'
import DBConnection from './config/db.js'
import urlRouter from './routes/url.route.js'
import URL from './models/url.js'
import staticRouter from './routes/StaticRouter.js'
import path from "path"
const app=express()
DBConnection()


app.set("view engine", "ejs")
app.set("views" , path.resolve("./views"))


app.use(express.json())
app.use("/url",urlRouter)
app.use("/",staticRouter)
app.get("/:shortId",async (req,res)=>{
    const shortId =req.params.shortId
    const entry=await URL.findOneAndUpdate({
        shortId
    },{
        $push:{
            visitedHistory:{
                timeStamp:Date.now()
            }

        }
    })
    res.redirect(entry.redriectId)
})







const PORT=8000


app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`);
})
app.use("/url",urlRouter)