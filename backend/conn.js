const mongoose = require('mongoose');
let connection;

async function connect() {
  const uri = process.env.MONGODB_URI || process.env.URL;
  if (!uri) {
    const error = new Error('Submissions are temporarily unavailable. Please try again later.');
    error.status = 503;
    throw error;
  }
  if (!connection) {
    connection = mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 }).catch(error => {
      connection = undefined;
      throw error;
    });
  }
  await connection;
}

const Contact = mongoose.models.Contact || mongoose.model('Contact', new mongoose.Schema({
  firstName: String, lastName: String, email: String, message: String,
}, { timestamps: true }));
const Order = mongoose.models.Order || mongoose.model('Order', new mongoose.Schema({
  formdata: {
    country: String, firstname: String, lastname: String, companyName: String,
    address: String, state: String, Zip: String, email: String, phoneNo: String, Notes: String,
  },
  cartdata: [{ id: Number, productImage: String, productName: String, productPrice: Number, pQuantity: Number }],
  total: Number,
}, { timestamps: true }));
module.exports = { connect, Contact, Order };
