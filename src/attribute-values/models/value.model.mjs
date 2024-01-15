import mongoose from "mongoose";

const Schema = mongoose.Schema;

const valueSchema = new Schema(
  {
    name: { type: String, intl: true, trim: true },
    attribute: { type: mongoose.Schema.Types.ObjectId, ref: "Attribute" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    modifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

export default mongoose.model("Value", valueSchema);
