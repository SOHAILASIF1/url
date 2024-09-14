import express from 'express'
import DBConnection from './config/db.js'
const app=express()
DBConnection()




const PORT=8000


app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`);
})