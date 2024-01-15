import Auth from "./auth.class.mjs";

export async function register(req, res) {
  try {
    const data = req.body;

    const newUser = await Auth.registerNewUser(data);

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function loginUser(req, res) {
  try {
    const data = req.body;

    const loginUser = await Auth.login(data);

    return res.status(200).json(loginUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function resetPassword(req, res) {
  try {
    const data = req.body;

    const resetPassword = await Auth.resetPassword(data);

    return res.status(200).json(resetPassword);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
