const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const CONTACTS_FILE = path.join(__dirname, '../contacts.json');

// POST /api/contact
router.post('/', (req, res) => {
    const { name, email, phone, projectType, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const newContact = {
        id: Date.now(),
        name,
        email,
        phone,
        projectType,
        message,
        date: new Date().toISOString()
    };

    fs.readFile(CONTACTS_FILE, 'utf8', (err, data) => {
        let contacts = [];
        if (!err && data) {
            try {
                contacts = JSON.parse(data);
            } catch (e) {
                contacts = [];
            }
        }

        contacts.push(newContact);

        fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), (err) => {
            if (err) {
                console.error('Error saving contact:', err);
                return res.status(500).json({ error: 'Failed to save contact information' });
            }
            res.status(201).json({ message: 'Contact inquiry received successfully' });
        });
    });
});

module.exports = router;
