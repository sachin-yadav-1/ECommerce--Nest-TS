import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: { type: String, maxlength: 10, required: [true, "first name is required"] },
    lastName: { type: String, maxlength: 10, required: [true, "last name is required"] },
    email: { type: String, required: [true, "email is required"] },
    mobile: { type: String, maxLen: 10, required: false, default: "" },
    cc: { type: String, maxlength: 4, required: false, default: "" },

    password: { type: String, default: "" },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default UserSchema;