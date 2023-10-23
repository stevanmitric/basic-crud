import orderModel from "./models/order.model.mjs";

export async function getAll(req, res) {
  try {
    const orders = await orderModel.find().lean();

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createOrder(req, res) {
  try {
    const { data } = req.body;

    const newOrder = new orderModel({ ...data }).save();

    return res
      .status(201)
      .json({ message: "New order created!", order: newOrder });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params;

    const order = await orderModel.findOne({ _id: id });

    return res.status(201).json({ order: order });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params;

    const { data } = req.body;

    await orderModel.updateOne({ _id: id }, { ...data });

    return res.status(201).json({ message: "Order updated successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function removeOrder(req, res) {
  try {
    const { id } = req.params;

    await orderModel.deleteOne({ _id: id });

    return res.status(201).json({ message: "Order deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
