import Attributes from "./attribute.class.mjs";

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

    const attributes = await Attributes.getAll(filters, sorter, skip, select);

    return res.status(200).json(attributes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params;
    const attribute = await Attributes.getById(id);

    return res.status(200).json(attribute);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function post(req, res) {
  try {
    const attribute = await Attributes.create(req.body);

    return res.status(201).json(attribute);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params;

    const attribute = await Attributes.update(id, req.body);

    return res
      .status(201)
      .json({ message: "Attribute updated!", attribute: attribute });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function remove(req, res) {
  try {
    const { id } = req.params;

    const attribute = await Attributes.delete(id);

    return res.status(200).json({ message: "Attribute deleted!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
