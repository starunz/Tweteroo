import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(5000);

let user = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    const signUpUser = req.body;

    if (user.length === 0) {
        user.push(signUpUser);
    } 
    else {
        user = [signUpUser];
    }

    res.send('ok');
});

app.post('/tweets', (req, res) => {
    const tweet = req.body;

    tweets.push({...tweet, avatar:user[0].avatar});
    console.log(user)

    res.send('ok');
}); 

app.get('/tweets', (req, res) => {
    res.send(tweets);
});