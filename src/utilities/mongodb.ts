import mongoose from "mongoose";

const dbName = "elson-dev";
const dbUrl = process.env.MONGODB_URI || `mongodb://localhost:27017/${dbName}`;
mongoose.connect(dbUrl);
const db = mongoose.connection;

// tslint:disable:no-console
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log(`connected to mongodb at ${dbUrl}`);
});
