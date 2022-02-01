import "../utilities/mongodb.js";
import { Schema, Document, model } from "mongoose";

export interface UserInterface extends Document {
  googleId: string;
}

const userSchema = new Schema<UserInterface>({
  googleId: String,
});

export default model("User", userSchema);
