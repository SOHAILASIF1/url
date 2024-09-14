import URL from "../models/url.js";
import { nanoid } from "nanoid";

export const urlGenerate = async (req, res) => {
   try {
     const body = req.body;
     if (!body.url) return res.status(400).json({ error: "URL is required" });

     const shortId = nanoid(10);

     await URL.create({
         shortId: shortId,
         redirectId: body.url, // Corrected typo here
         visitedHistory: []
     });

     return res.render("Home", { id: shortId });
   } catch (error) {
     console.log("ERR", error);
     return res.status(500).json({ error: "Internal Server Error" });
   }
};

export const urlDetail = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const result = await URL.findOne({ shortId });

        if (!result) return res.status(404).json({ error: "URL not found" });

        res.json({
            totalClicks: result.visitedHistory.length,
            detail: result.visitedHistory
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
