import Category from '../models/category.model.js';

const categories = [
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Clothing' },
    { name: 'Home & Kitchen' },
    { name: 'Sports' },
    { name: 'Toys & Games' },
    { name: 'Beauty & Personal Care' },
    { name: 'Automotive' },
    { name: 'Health & Wellness' },
    { name: 'Grocery' },
    { name: 'Pet Supplies' },
    { name: 'Office Supplies' },
    { name: 'Garden & Outdoors' },
    { name: 'Jewelry' },
    { name: 'Baby Products' }
];

export async function seedCategories() {
  const count = await Category.countDocuments();
  if (count === 0) {
    await Category.insertMany(categories);
    console.log('Categories seeded');
  } else {
    console.log('Categories already exist, skipping seeding');
  }
}