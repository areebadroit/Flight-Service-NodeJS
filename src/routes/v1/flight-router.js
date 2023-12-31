const express = require("express");
const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");
const router = express.Router();

router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);
router.get(
  "/",
  FlightMiddlewares.validateGetAllFlightsRequest,
  FlightController.getAllFlights
);
router.get("/:id", FlightController.getFlight);
router.patch(
  "/:id",
  FlightMiddlewares.validateUpdateRemainingSeats,
  FlightController.updateRemainingSeats
);
module.exports = router;
