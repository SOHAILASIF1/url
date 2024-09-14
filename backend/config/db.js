import mongoose from 'mongoose'
const DBConnection= async ()=>{
    const MONGODB_URI="mongodb+srv://sohailasuf123:Sohail@cluster0.xuu8w.mongodb.net/"
    try {
        await mongoose.connect(MONGODB_URI,{ useNewUrlParser:true})
        console.log("db connect");

        
    } catch (error) {
        console.log(error.message);
        
    }

}
export default DBConnection