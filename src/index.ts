import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const port = process.env.SERVER_PORT;
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
