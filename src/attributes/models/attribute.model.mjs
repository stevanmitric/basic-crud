import mongoose from "mongoose";

const Schema = mongoose.Schema;

const attributeSchema = new Schema(
  {
    name: { type: String, intl: true, trim: true },
    type: {
      type: String,
      enum: ["CHOICE", "MULTICHOICE", "INPUT", "NUMBER", "CHECKBOX", "DATE"],
      default: "CHOICE"
    },
    unit: { type: String },
    isRequired: { type: Boolean, default: false, required: true },
    isGlobal: { type: Boolean, default: false },
    includeInSearch: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    modifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    values: [{ type: mongoose.Schema.Types.ObjectId, ref: "Value" }]
  },
  { timestamps: true }
);

export default mongoose.model("Attribute", attributeSchema);
