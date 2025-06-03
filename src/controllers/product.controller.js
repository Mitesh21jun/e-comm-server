import Product from '../models/product.model.js';

export async function addProduct(req, res) {
  try {
    const { name, description, price, discount, image, category } = req.body;
    const product = new Product({ name, description, price, discount, image, category });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function editProduct(req, res) {
  try {
    const { discount, image, ...updateFields } = req.body;
    const update = { ...updateFields };
    if (discount !== undefined) update.discount = discount;
    if (image !== undefined) update.image = image;
    const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function deleteProduct(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function getAllProducts(req, res) {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getProductDetails(req, res) {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getProductsByCategory(req, res) {
  try {
    const { categoryId } = req.params;
    const products = await Product.find({ category: categoryId }).populate('category');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
