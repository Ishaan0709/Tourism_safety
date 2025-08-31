const User = require("../models/user.js");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // <-- make sure this is here

// 📩 Send verification code
exports.sendCode = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not registered" });

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const codeExpiry = new Date(Date.now() + 5 * 60 * 1000);

    user.verificationCode = verificationCode;
    user.codeExpiry = codeExpiry;
    await user.save();

    // ✅ Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Tourism Safety" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Login Verification Code",
      text: `Hello ${user.name},\n\nYour login verification code is: ${verificationCode}\n\nThis code will expire in 5 minutes.`,
    });

    res.json({ message: "Verification code sent to email" });
  } catch (error) {
    console.error("Error in sendCode:", error); // 👈 add this
    res.status(500).json({ error: "Error sending verification code" });
  }
};

exports.verifyCode = async (req, res) => {
  const { email, verificationCode } = req.body; // ✅ coming from frontend
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    // ✅ check OTP and expiry
    if (
      user.verificationCode === verificationCode && 
      user.codeExpiry > Date.now()
    ) {
      // clear code after successful login
      user.verificationCode = null;
      user.codeExpiry = null;
      await user.save();

      // 🔑 create JWT token
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.json({
        message: "Login successful",
        token,
        user: {
          name: user.name,
          email: user.email,
          policeStationName: user.policeStationName,
          areaOfStation: user.areaOfStation,
          post: user.post,
        },
      });
    } else {
      return res.status(400).json({ error: "Invalid or expired code" });
    }
  } catch (error) {
    console.error("Error in verifyCode:", error);
    res.status(500).json({ error: "Error verifying code" });
  }
};
