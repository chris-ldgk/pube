import "reflect-metadata";
import { createConnection } from "typeorm";
import * as bodyParser from "body-parser";
import * as express from "express";
import "express-async-errors";
import { makeRouter } from "./routers/BaseRouter";
import { Day, Exercise } from "./entities";

const PORT = 4000;

createConnection()
  .then(async (connection) => {
    console.log("Successfully connected to database");
    const app = express.default();

    const exerciseRouter = makeRouter<Exercise>(connection, Exercise);
    const dayRouter = makeRouter<Exercise>(connection, Day);

    app.use(bodyParser.json());
    app.use("/exercise", exerciseRouter);
    app.use("/day", dayRouter);

    app.listen(PORT, () => {
      console.log("Express server listening on port", PORT);
    });
  })
  .catch((error) => console.error(error));
