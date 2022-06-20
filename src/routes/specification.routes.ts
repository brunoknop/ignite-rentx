import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/CreateSpecification";
import { listSpecificationController } from "../modules/cars/useCases/ListSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationRoutes };
