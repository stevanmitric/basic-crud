import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true
    },
    comment: {
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
    status: {
      type: String,
      enum: ["ACCEPTED", "NOT ACCEPTED", "ON HOLD"],
      default: "ON HOLD"
    },
    order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Order", orderSchema);
