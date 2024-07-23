// emailService.js
const nodemailer = require('nodemailer');

// Create a transporter to send emails (configure it with your email service)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Specify 'gmail' as the email service (you can use another service if needed)
  auth: {
    user: 'isnehapareek@gmail.com', // Replace with your Gmail email address (sender)
    pass: 'valxckexflxyoagn', // Replace with your Gmail password or app password
  },
});

// Function to send the email
const sendEmail = async (formData) => {
  try {
    const { name, email, message } = formData;

    // Define the email content
    const mailOptions = {
      from: email, // Set the sender's email address as the 'from' field
      to: 'isnehapareek@gmail.com', // Replace with your email address (the recipient's email address)
      subject: 'Contact Form Submission', // Specify the subject of the email
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmail };
