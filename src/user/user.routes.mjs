import { getAll, getById, update, removeUser } from "./user.controller.mjs";

import { addRandomUsers } from "../helpers/scripts/user.mjs";

export default (app) => {
  app.route("/users").get(getAll);

  app.route("/user/:id").get(getById).put(update).delete(removeUser);

  app.route("/add-users").post(addRandomUsers);
};
