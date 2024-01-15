import User from "./user.model.mjs";
import { genSalt, hash } from "bcrypt";
import { v4 as uuidv4 } from "uuid";

class Users {
  static async getAll(query) {
    try {
      const filters = query && query.filters ? query.filters : {};
      const sorter = query && query.sorter ? query.sorter : { createdAt: -1 };

      const users = await User.find(filters).sort(sorter).lean();

      return { users };
    } catch (error) {
      return error.message;
    }
  }

  static async getUserById(id) {
    try {
      const user = await User.findOne({ _id: id });

      return user;
    } catch (error) {
      return error.message;
    }
  }

  static async updateUserById(id, data) {
    try {
      await User.updateOne({ _id: id }, { ...data });

      const user = await User.findOne({ _id: id });

      return user;
    } catch (error) {
      return error.message;
    }
  }

  static async deleteUserById(id) {
    try {
      await User.deleteOne({ _id: id });

      return true;
    } catch (error) {
      return error.message;
    }
  }
}

export default Users;
