import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: String
});

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;
