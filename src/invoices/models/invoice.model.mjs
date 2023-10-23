import mongoose from "mongoose";

const Schema = mongoose.Schema;

const invoiceSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true
    },
    totalPrice: {
      type: String,
      required: true
    },
    discount: {
      type: Boolean,
      default: false
    },
    totalDiscountedPrice: {
      type: String,
      required: true
    },
    pdf: {
      type: String
    },
    status: {
      type: String,
      enum: ["DELIVERED", "NOT DELIVERED"],
      default: "NOT DELIVERED"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Invoice", invoiceSchema);
