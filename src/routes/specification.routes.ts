import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/CreateSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/ListSpecification/ListSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", listSpecificationsController.handle);

export { specificationRoutes };
