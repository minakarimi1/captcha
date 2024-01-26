import express, { urlencoded } from "express";

const PORT=3000;
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{

})


app.listen((PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
}))



