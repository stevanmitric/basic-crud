import mongoose from "mongoose";

const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    pib: {
      type: String,
      required: true
    },
    companyNumber: {
      type: String,
      required: true
    },
    city: {
      type: Boolean,
      default: false
    },
    zip: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "DELETED"],
      default: "ACTIVE"
    },
    mainAccount: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);
