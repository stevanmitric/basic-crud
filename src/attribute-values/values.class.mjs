import Value from "./models/value.model.mjs";

class Values {
  static async getAll(filters, sorter, skip, select) {
    try {
      const values = await Value.find(filters)
        .sort(sorter)
        .skip(skip)
        .select(select)
        .lean();

      return values;
    } catch (error) {
      return error.message;
    }
  }

  static async create(data) {
    try {
      const value = new Value({ ...data }).save();

      return value;
    } catch (error) {
      error.message;
    }
  }

  static async update(id, data) {
    try {
      await Value.updateOne({ _id: id }, { ...data });

      return true;
    } catch (error) {
      return error.message;
    }
  }

  static async remove(id) {
    try {
      await Value.deleteOne({ _id: id });

      return true;
    } catch (error) {
      return error.message;
    }
  }

  static async getById(id) {
    try {
      const value = await Value.findOne({ _id: id });

      return value;
    } catch (error) {
      return error.message;
    }
  }
}

export default Values;
