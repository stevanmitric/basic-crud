import Product from "./models/product.model.mjs";

export async function getAll(req, res) {
  try {
    const products = await Product.find().lean();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function create(req, res) {
  try {
    const { data } = req.body;

    const product = new Product({ ...data });

    return res
      .status(201)
      .json({ message: "New user created!", user: product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ _id: id });

    return res.status(201).json({ product: product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params;

    const { data } = req.body;

    await Product.updateOne({ _id: id }, { ...data });

    return res.status(201).json({ message: "Product updated successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function removeProduct(req, res) {
  try {
    const { id } = req.params;

    await Product.deleteOne({ _id: id });

    return res.status(201).json({ message: "Product deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
