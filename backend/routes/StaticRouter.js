import express from "express"
const router=express.Router()
router.get("/",async(req,res)=>{
    return res.render("Home")


})

export default router