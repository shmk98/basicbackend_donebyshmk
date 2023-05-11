import express from 'express';

const router = express.Router();
const users = [
    {
        firstName: "Rupam",
        lastName: "Das",
        age: 25
    }, {
        firstName: "Rohan",
        lastName: "Ghosh",
        age: 29
    },
    {
        firstName: "Deep",
        lastName: "Kumar",
        age: 35
    }
]

// router.get('/users', (req, res) => {
router.get('/', (req, res) => {
    // console.log(users)
        res.send(users);
        // res.send('hello');
} );


router.post('/', (req, res) => {
    // console.log('post route reached');
    console.log(req.body);
    const user = req.body;
    users.push(user);
    // res.send('post route reached')
    res.send(`User with the name ${user.firstName} added to the database!`);
});
export default router;