import Company from "./models/company.model.mjs";

class CompanyClass {
  static async getAll(filters, sorter, skip, select) {
    try {
      const companies = await Company.find(filters)
        .sort(sorter)
        .skip(skip)
        .select(select)
        .lean();

      return companies;
    } catch (error) {
      return error.message;
    }
  }

  static async create(data) {
    try {
      const company = new Company({ ...data }).save();

      return company;
    } catch (error) {
      return error.message;
    }
  }

  static async update(id, data) {
    try {
      await Company.updateOne({ _id: id }, { ...data });

      return true;
    } catch (error) {
      return error.message;
    }
  }

  static async getById(id) {
    try {
      const company = await Company.findOne({ _id: id });

      return company;
    } catch (error) {
      return error.message;
    }
  }

  static async remove(id) {
    try {
      await Company.deleteOne({ _id: id });

      return true;
    } catch (error) {
      error.message;
    }
  }
}

export default CompanyClass;
