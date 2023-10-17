export async function getAll(req, res) {
  try {
    const users = await User.find().lean();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function create(req, res) {
  try {
    const newUser = await Users.registerNewUser(req.body);

    return res
      .status(201)
      .json({ message: "New user created!", user: newUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function create(req, res) {
  try {
    const newUser = await Users.registerNewUser(req.body);

    return res
      .status(201)
      .json({ message: "New user created!", user: newUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
