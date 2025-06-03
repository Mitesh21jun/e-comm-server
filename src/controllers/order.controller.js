import Order from "../models/order.model.js";
import Customer from "../models/customer.model.js";

export async function placeOrder(req, res) {
    try {
        const { customer, items } = req.body;
        let customerDoc;
        if (customer && typeof customer === 'object' && customer.email) {
            customerDoc = await Customer.findOne({ email: customer.email });
            if (!customerDoc) {
                customerDoc = new Customer(customer);
                await customerDoc.save();
            }
        } else {
            customerDoc = await Customer.findById(customer);
        }
        if (!customerDoc) {
            return res.status(404).json({ error: "Customer not found." });
        }
        if (!Array.isArray(items) || items.length === 0) {
            return res
                .status(400)
                .json({ error: "Order must have at least one item." });
        }
        for (const item of items) {
            if (!item.product || !item.quantity || !item.price) {
                return res
                    .status(400)
                    .json({ error: "Each item must have product, quantity, and price." });
            }
        }
        let total = 0;
        const itemsWithDiscount = await Promise.all(
            items.map(async (item) => {
                const productDoc = await Order.db.model('Product').findById(item.product);
                let discount = 0;
                if (productDoc && productDoc.discount) {
                    discount = (item.price * productDoc.discount) / 100;
                }
                const finalPrice = (item.price - discount) * item.quantity;
                total += finalPrice;
                return {
                    product: item.product,
                    quantity: item.quantity,
                    price: item.price,
                    discount: discount,
                };
            })
        );
        const order = new Order({
            customer: customerDoc._id,
            items: itemsWithDiscount,
            total,
        });
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export async function getAllOrders(req, res) {
  try {
    const orders = await Order.find()
      .populate("customer")
      .populate("items.product");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getOrdersByCustomerId(req, res) {
  try {
    const { customerId } = req.params;
    const orders = await Order.find({ customer: customerId })
      .populate("customer")
      .populate("items.product");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
