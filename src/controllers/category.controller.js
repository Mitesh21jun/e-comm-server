import Category from '../models/category.model.js';

export async function getAllCategories(req, res) {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function addCategory(req, res) {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Category name is required' });
    }
    const existing = await Category.findOne({ name });
    if (existing) {
      return res.status(409).json({ error: 'Category already exists' });
    }
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
