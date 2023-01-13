import express from "express";
import "express-async-errors";

import usersRoute from "./routes/users";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the main page");
});

app.use("/users", usersRoute);

export default app;
