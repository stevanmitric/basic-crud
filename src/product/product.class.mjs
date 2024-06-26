import Product from "./models/product.model.mjs";

class Products {
  static async getAll(filters, sorter, skip, select) {
    try {
      const products = await Product.find(filters)
        .sort(sorter)
        .skip(skip)
        .select(select)
        .lean();

      return products;
    } catch (error) {
      return error.message;
    }
  }

  static async create(data) {
    try {
      const product = new Product({ ...data }).save();

      return product;
    } catch (error) {
      return error.message;
    }
  }

  static async update(id, data) {
    try {
      await Product.updateOne({ _id: id }, { ...data });

      return true;
    } catch (error) {
      return error.message;
    }
  }

  static async getById(id) {
    try {
      const product = await Product.findOne({ _id: id });

      return product;
    } catch (error) {
      return error.message;
    }
  }

  static async remove(id) {
    try {
      await Product.deleteOne({ _id: id });

      return true;
    } catch (error) {
      return error;
    }
  }
}

export default Products;
