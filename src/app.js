import 'dotenv'
import {generateCaptcha} from './fs.js'
import express, { urlencoded } from "express";

const PORT=process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}))


app.get('/',(req,res)=>{
    const { captcha, result } = generateCaptcha();
    res.render('index',{result,captcha})

})

app.get('/captchaReq', (req, res) => {
    const { captcha, result } = generateCaptcha();
    res.send({captcha:captcha,result:result})
});

app.post('/submit', (req, res) => {
    const userAnswer = parseInt(req.body.answer);
    const correctAnswer = parseInt(req.body.result);
    if (userAnswer === correctAnswer) {
    }
});

app.listen((PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
}))



