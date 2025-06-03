import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  discount: { type: Number },
  image: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
