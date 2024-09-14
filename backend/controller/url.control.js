import URL from "../models/url.js";
import { nanoid } from "nanoid";
export const urlGenerate=async (req,res)=>{
   try {
     const body = req.body
     if(!body.url) res.status(400).json({ error:"Url Is required"})
     const shortId=nanoid(10)
 
     await URL.create({
         shortId:shortId,
         redriectId:body.url,
         visitedHistory:[]
     })
     return res.render("Home",{id:shortId})
    
 }
 catch (error) {
    console.log("ERR",error);
    
   }
} 
export const urlDetail=async(req,res)=>{
    try {
        const shortId=req.params.shortId
        const result=await URL.findOne({shortId})
        res.json({
            totalClicks:result.visitedHistory.length,
            detail:result.visitedHistory
        })

        
    } catch (error) {
        console.log(error);
        
    }
}

