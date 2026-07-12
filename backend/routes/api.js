const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const Admin = require('../models/Admin');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Certificate = require('../models/Certificate');
const jwt = require('jsonwebtoken');

// Middleware to protect admin routes
const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.admin = await Admin.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }
    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

const nodemailer = require('nodemailer');

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// @route POST /api/contact
// @desc Submit contact form
router.post('/contact', async (req, res) => {
    try {
        const { fullName, email, subject, message } = req.body;
        // 1. Send email to inbox first
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'himanshuraj1707@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            text: `You received a new message from your portfolio website!\n\nName: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        // 2. Try to save to database (will fail if MongoDB is not running, but email will still be sent!)
        let newMessage = null;
        try {
            newMessage = await Message.create({ fullName, email, subject, message });
        } catch (dbError) {
            console.log('Database save failed, but email was sent.', dbError.message);
        }

        res.status(201).json({ success: true, data: newMessage, msg: 'Email sent' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// @route GET /api/messages
// @desc Get all messages (Admin)
router.get('/messages', protect, async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route POST /api/admin/login
// @desc Auth admin & get token
router.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (admin && (await admin.matchPassword(password))) {
            res.json({
                _id: admin._id,
                username: admin.username,
                token: jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '30d' })
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Seed Initial Admin Route (Can be removed after first use)
router.post('/admin/seed', async (req, res) => {
    try {
        const exists = await Admin.findOne({ username: 'admin' });
        if (exists) return res.status(400).json({ message: 'Admin already exists' });
        const admin = await Admin.create({ username: 'admin', password: 'password123' });
        res.status(201).json({ message: 'Admin seeded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
