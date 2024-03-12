import faker from "faker";
import userModel from "../../user/user.model.mjs";

export async function addRandomUsers(req, res) {
  try {
    function generateRandomUser() {
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        status: "ACTIVE",
        country: faker.address.countryCode()
      };
    }
    for (let i = 0; i <= 500; i++) {
      const randomUserData = await generateRandomUser();
      const user = new userModel(randomUserData);

      await user.save();
    }

    return res.status(201).json({ message: "Script done!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
