import {
  getAll,
  register,
  getById,
  update,
  removeUser
} from "./user.controller.mjs";

export default (app) => {
  app.route("/users").get(getAll).post(register);

  app.route("/user/:id").get(getById).put(update).delete(removeUser);
};
