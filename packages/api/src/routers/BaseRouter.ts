import { Request, Response, Router } from "express";
import { Connection, EntityTarget } from "typeorm";
import { BaseController } from "../controllers";

export function makeRouter<T>(
  connection: Connection,
  type: EntityTarget<T>
): Router {
  const router = Router();
  const controller = new BaseController<T>(type, connection);

  router
    .route("/")
    .get(async (_: Request, res: Response) => {
      return res.json(await controller.getAll());
    })
    .put(async (req: Request, res: Response) => {
      return res.json(await controller.upsert(req.body));
    });

  router
    .route("/:id")
    .get(async (req: Request, res: Response) => {
      return res.json(await controller.get(Number(req.params.id)));
    })
    .put(async (req: Request, res: Response) => {
      return res.json(await controller.upsert(req.body, Number(req.params.id)));
    })
    .delete(async (req: Request, res: Response) => {
      return res.json(await controller.remove(Number(req.params.id)));
    });

  return router;
}
