import 'dotenv'
import {generateCaptcha} from './fs.js'
import express, { urlencoded } from "express";

const PORT=process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))


app.get('/',(req,res)=>{

})

app.get('/',(req,res)=>{

})


app.listen((PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
}))



