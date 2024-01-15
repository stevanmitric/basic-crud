import { loginUser, register, resetPassword } from "./auth.controller.mjs";

export default (app) => {
  app.route("/login").post(loginUser);

  app.route("/register").post(register);

  //   app.route("/email-verification/:token").get(controller.verifyEmail);

  //   app.route("/forgot-password").post(controller.forgotPassword);

  app.route("/password-reset/:token").post(resetPassword);
};
