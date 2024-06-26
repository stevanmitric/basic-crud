import User from "./user.model.mjs";
import Users from "./user.class.mjs";

export async function getAll(req, res) {
  try {
    const query = req.query;
    const users = await Users.getAll(query);

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params;

    const user = await Users.getById(id);

    return res.status(201).json({ user: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params;

    const { data } = req.body;

    await User.updateOne({ _id: id }, { ...data });

    return res.status(201).json({ message: "User updated successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function removeUser(req, res) {
  try {
    const { id } = req.params;

    await User.deleteOne({ _id: id });

    return res.status(201).json({ message: "User deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
