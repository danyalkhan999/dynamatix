const express = require("express");
const {
  createClaim,
  getAllClaims,
  getClaimById,
  updateClaim,
  deleteClaim,
} = require("../controllers/claimController.js");

const router = express.Router();

/**
 * @route POST /claims
 * @description Create a new claim.
 */
router.post("/claims", createClaim);

/**
 * @route GET /claims
 * @description Get all claims.
 */
router.get("/claims", getAllClaims);

/**
 * @route GET /claims/:id
 * @description Get a claim by ID.
 */
router.get("/claims/:id", getClaimById);

/**
 * @route PUT /claims/:id
 * @description Update a claim.
 */
router.put("/claims/:id", updateClaim);

/**
 * @route DELETE /claims/:id
 * @description Delete a claim.
 */
router.delete("/claims/:id", deleteClaim);

module.exports = router;
