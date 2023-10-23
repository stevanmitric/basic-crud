import invoiceModel from "./models/invoice.model.mjs";

export async function getAll(req, res) {
  try {
    const invoices = await invoiceModel.find().lean();

    return res.status(200).json(invoices);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createInvoice(req, res) {
  try {
    const { data } = req.body;

    const newInvoice = new invoiceModel({ ...data }).save();

    return res
      .status(201)
      .json({ message: "New invoice created!", invoice: newInvoice });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params;

    const order = await invoiceModel.findOne({ _id: id });

    return res.status(201).json({ order: order });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params;

    const { data } = req.body;

    await invoiceModel.updateOne({ _id: id }, { ...data });

    return res.status(201).json({ message: "Order updated successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function removeInvoice(req, res) {
  try {
    const { id } = req.params;

    await invoiceModel.deleteOne({ _id: id });

    return res.status(201).json({ message: "Order deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
