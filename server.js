import express from "express";
import * as dotenv from "dotenv";
import connectToDb from "./utilites/db.js";
import courseRoute from "./routes/courseRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectToDb(process.env.MONGODB_URI);

app.use(express.json());
app.use("/api", courseRoute);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
