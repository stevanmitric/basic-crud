import Values from "./values.class.mjs";

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

    const values = await Values.getAll(filters, sorter, skip, select);

    return res.status(200).json(values);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function create(req, res) {
  try {
    const data = req.body;

    const value = await Values.create(data);

    return res.status(201).json({ message: "Value created!", value: value });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function update(req, res) {
  try {
    const id = req.params.id;

    const data = req.body;

    const value = await Values.update(id, data);

    return res.status(201).json({ message: "Value updated!", value: value });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params;

    const value = await Values.getById(id);

    return res.status(200).json(value);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
