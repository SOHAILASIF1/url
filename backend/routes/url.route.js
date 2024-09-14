import express from "express"
import { urlDetail, urlGenerate } from "../controller/url.control.js"

const router=express.Router()

router.post("/",urlGenerate)
router.get("/details/:shortId",urlDetail)



export default router
