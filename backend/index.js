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
app.use(express.urlencoded({extended:false}))
app.use("/url",urlRouter)
app.use("/",staticRouter)
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitedHistory: {
                        timeStamp: Date.now(),
                    },
                },
            }
        );

        if (!entry) {
            return res.status(404).send("URL not found");
        }

        res.redirect(entry.redirectId); // Assuming 'redirectId' is the correct property
    } catch (error) {
        console.error("Error fetching or updating URL entry:", error);
        res.status(500).send("Internal Server Error");
    }
});








const PORT=8000


app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`);
})
