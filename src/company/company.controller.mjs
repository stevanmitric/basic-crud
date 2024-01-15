import Company from "./company.class.mjs";

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

    const companies = await Company.getAll(filters, sorter, skip, select);

    return res.status(200).json(companies);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function create(req, res) {
  try {
    const data = req.body;

    const company = await Company.create(data);

    return res
      .status(201)
      .json({ message: "Company created!", company: company });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function update(req, res) {
  try {
    const data = req.body;
    const id = req.params.id;

    const company = await Company.update(id, data);

    return res
      .status(201)
      .json({ message: "Company updated!", company: company });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getById(req, res) {
  try {
    const id = req.params.id;

    const company = await Company.getById(id);

    return res.status(200).json(company);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function remove(req, res) {
  try {
    const id = req.params.id;

    const company = await Company.remove(id);

    return res
      .status(200)
      .json({ message: "Company removed!", company: company });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
