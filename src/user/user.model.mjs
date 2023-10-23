import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["ACTIVE", "SUSPENDED", "DELETED", "WAITING FOR ACTIVATION"],
      default: "WAITING FOR ACTIVATION"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("User", userSchema);

// export default User;
