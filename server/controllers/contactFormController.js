const contactFormModel = require('../models/contactFormModel');
const { sendEmail } = require('./emailService'); // Import the sendEmail function from your email service file

class ContactFormController {
  async submitForm(req, res) {
    try {
      const { name, email, message } = req.body;
      await sendEmail({ name, email, message }); // Send email with the form data
      await contactFormModel.submitForm({ name, email, message }); // Store form data in the database
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ error: 'An error occurred while submitting the form.' });
    }
  }
}

module.exports = new ContactFormController();
