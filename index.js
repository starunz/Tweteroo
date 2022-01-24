import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(5000);

const user = [];
const tweet = [];

app.post('/sign-up', (req, res) => {
    const signUpUser = req.body;

    user.push(signUpUser);

    res.send('ok');
});