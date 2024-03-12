import Attribute from "./models/attribute.model.mjs";
import Value from "../attribute-values/models/value.model.mjs";

class Attributes {
  static async getAll(filters, sorter, skip, select) {
    try {
      const attributes = await Attribute.find(filters)
        .sort(sorter)
        .skip(skip)
        .select(select)
        .lean();

      return attributes;
    } catch (error) {
      return error;
    }
  }

  static async getById(id) {
    try {
      const attribute = await Attribute.findOne({ _id: id });

      return attribute;
    } catch (error) {
      return error;
    }
  }

  static async create(data) {
    try {
      const attribute = new Attribute({ ...data }).save();

      return attribute;
    } catch (error) {
      return error;
    }
  }

  static async update(id, data) {
    try {
      const attribute = await Attribute.updateOne({ _id: id }, { ...data });

      return attribute;
    } catch (error) {
      return error;
    }
  }

  static async delete(id) {
    try {
      const attribute = await Attribute.findOne({ _id: id });

      const values = await Value.deleteMany({ _id: { $in: attribute.values } });

      await attribute.remove();

      return attribute, values;
    } catch (error) {
      return error;
    }
  }
}

export default Attributes;
