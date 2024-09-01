import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
// mongodb+srv://saju:sajusuresh03%40@cluster0.ezqgjqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const initDB = async(): Promise<void> =>{
    try {
     await mongoose.connect("mongodb://localhost:27017/revise") 
    console.log('db connected');
    
} catch (error) {
    console.error(error)
}

}




export default initDB