const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const Admin = require("../models/Admin");
const Project = require("../models/Project");
const Skill = require("../models/Skill");
const Certificate = require("../models/Certificate");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// =====================
// Protect Middleware
// =====================
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.admin = await Admin.findById(decoded.id).select("-password");

      return next();
    } catch (error) {
      return res.status(401).json({
        message: "Not authorized, token failed",
      });
    }
  }

  return res.status(401).json({
    message: "Not authorized, no token",
  });
};

// =====================
// Nodemailer
// =====================


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err) => {
  if (err) {
    console.error("SMTP VERIFY ERROR:", err);
  } else {
    console.log("SMTP Server Ready");
  }
});

// =====================
// Contact Form
// =====================

router.post("/contact", async (req, res) => {
  try {
    const { fullName, email, subject, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "himanshuraj1707@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: `
New Portfolio Contact

Name: ${fullName}

Email: ${email}

Subject: ${subject}

Message:

${message}
`,
    };

    // Send Email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email Sent:", info.response);

    // Save in MongoDB
    let savedMessage = null;

    try {
      savedMessage = await Message.create({
        fullName,
        email,
        subject,
        message,
      });
    } catch (dbError) {
      console.log("Mongo Save Error:", dbError.message);
    }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      data: savedMessage,
    });
  } catch (error) {
    console.log("Email Error:", error);

    return res.status(500).json({
      success: false,
      message: "Email could not be sent",
      error: error.message,
    });
  }
});

// =====================
// Messages
// =====================

router.get("/messages", protect, async (req, res) => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// =====================
// Admin Login
// =====================

router.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({
      username,
    });

    if (admin && (await admin.matchPassword(password))) {
      return res.json({
        _id: admin._id,
        username: admin.username,
        token: jwt.sign(
          { id: admin._id },
          process.env.JWT_SECRET,
          {
            expiresIn: "30d",
          }
        ),
      });
    }

    res.status(401).json({
      message: "Invalid username or password",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// =====================
// Seed Admin
// =====================

router.post("/admin/seed", async (req, res) => {
  try {
    const exists = await Admin.findOne({
      username: "admin",
    });

    if (exists) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }

    await Admin.create({
      username: "admin",
      password: "password123",
    });

    res.status(201).json({
      message: "Admin seeded successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;