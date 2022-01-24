import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(5000);

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    const signUpUser = req.body;

    if (users.length === 0) {
        users.push(signUpUser);
    } 
    else {
        users = [signUpUser];
    }

    res.send('ok');
});

app.post('/tweets', (req, res) => {
    const tweet = req.body;

    tweets.push({...tweet, avatar:users[0].avatar});

    res.send('ok');
}); 

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(0,10));
});