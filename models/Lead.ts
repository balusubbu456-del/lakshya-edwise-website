import mongoose, { Schema, models, model } from "mongoose";

const LeadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "New Lead",
    },
  },
  {
    timestamps: true,
  }
);

const Lead = models.Lead || model("Lead", LeadSchema);

export default Lead;