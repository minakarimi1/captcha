import 'dotenv/config';
import express from 'express';
import { generateCaptcha } from './fs.js';

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    try {
        const { captcha, result } = generateCaptcha();
        res.render('index', { result, captcha });
    } catch (error) {
        console.error('Error generating captcha:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/captchaReq', (req, res) => {
    try {
        const { captcha, result } = generateCaptcha();
        res.send({ captcha, result });
    } catch (error) {
        console.error('Error generating captcha:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/submit', (req, res) => {
    try {
        const userAnswer = parseInt(req.body.answer);
        const correctAnswer = parseInt(req.body.result);
        if (userAnswer === correctAnswer) {
            res.status(200).send({ message: 'جواب صحیح' });
        } else {
            res.status(404).send({ message: 'جواب اشتباه' });
        }
    } catch (error) {
        console.error('Error processing submission:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
