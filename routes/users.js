import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); 

const router = express.Router();

const users = [
    {
        userName: "Antonio",
        email: "Antonio@gmail.com"
    },
    {
        userName: "Samantha",
        email: "Samantha@gmail.com"
    }
]

router.get('/', (req, res) => {

    res.send('users');
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push(user);

    res.send(`User with the name ${user.userName} added to the database!`);
});

export default router;