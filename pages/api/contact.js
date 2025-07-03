import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, requirements } = req.body;

  // Set up transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // your gmail address
      pass: process.env.GMAIL_PASS, // your gmail app password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "build4u25@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Requirements: ${requirements}
      `,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
}