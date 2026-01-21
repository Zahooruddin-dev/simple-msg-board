const router = require('express').Router();
const sql = require('../db/pool');


router.get('/', async(req, res) => {
    try {
        const messages = await sql`SELECT * FROM messages ORDER BY added DESC`;
        res.render('index', { messages });
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).send('Server Error');
    }
})

router.get('/new', (req, res) => {
    res.render('form');
})

router.get('/message/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const messages = await sql`SELECT * FROM messages WHERE id = ${id}`;
        if (messages.length === 0) {
            return res.status(404).send('Message not found');
        }
        res.render('message', { message: messages[0] });
    } catch (error) {
        console.error('Error fetching message:', error);
        res.status(500).send('Server Error');
    }
})

router.post('/', async(req, res) => {
    try {
        const { text, user } = req.body;
        await sql`INSERT INTO messages (user_name, text, added) VALUES (${user}, ${text}, NOW())`;
        res.redirect('/');
    } catch (error) {
        console.error('Error inserting message:', error);
        res.status(500).send('Server Error');
    }
})
module.exports = router;