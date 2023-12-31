import express from "express";
import cors from "cors";
import dbConnection from "./config/Database.js";
import mainRouter from "./routes/index.js";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/", mainRouter);

dbConnection.sync({ alter: true })
  .then(() => {
    console.log(`Database connected`);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(`Unable to connect to databse: ${error}`));
