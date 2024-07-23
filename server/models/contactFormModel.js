const { MongoClient } = require('mongodb');

const MONGODB_URI = 'mongodb://localhost:27017/portfolio'; // Replace with your MongoDB connection URI

class ContactFormModel {
  async submitForm(formData) {
    try {
      const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      const db = client.db();
      const collection = db.collection('contact_forms');
      await collection.insertOne(formData);
      client.close();
    } catch (error) {
      throw new Error('An error occurred while submitting the form.');
    }
  }
}

module.exports = new ContactFormModel();
