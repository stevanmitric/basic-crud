import Products from "./product.class.mjs";

export async function getAll(req, res) {
  try {
    const filters =
      req.query && req.query.filter ? JSON.parse(req.query.filter) : {};
    const sorter =
      req.query && req.query.sorter
        ? JSON.parse(req.query.sorter)
        : { createdAt: 1 };
    const skip = req.query && req.query.offset ? Number(req.query.offset) : 0;
    const select =
      req.query && req.query.select ? JSON.parse(req.query.select) : {};

    const products = await Products.getAll(filters, sorter, skip, select);

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function create(req, res) {
  try {
    const { data } = req.body;

    const product = await Products.create(data);

    return res
      .status(201)
      .json({ message: "New product created!", created: product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params;

    const product = await Products.getById(id);

    return res.status(200).json({ product: product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params;

    const { data } = req.body;

    const product = await Products.update(id, data);

    return res
      .status(201)
      .json({ message: "Product updated successfully!", updated: product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function removeProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await Products.remove(id);

    return res
      .status(200)
      .json({ message: "Product deleted successfully!", removed: product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
