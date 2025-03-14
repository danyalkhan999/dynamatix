const Claim = require("../models/Claims.js");

/**
 * Create a new claim.
 * @route POST /claims
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.createClaim = async (req, res) => {
  try {
    const claim = new Claim(req.body);
    await claim.save();
    res.status(201).json(claim);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Get all claims.
 * @route GET /claims
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.getAllClaims = async (req, res) => {
  try {
    const claims = await Claim.find();
    res.json(claims);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get a single claim by ID.
 * @route GET /claims/:id
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.getClaimById = async (req, res) => {
  try {
    const claim = await Claim.findById(req.params.id);
    if (!claim) return res.status(404).json({ message: "Claim not found" });
    res.json(claim);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Update a claim.
 * @route PUT /claims/:id
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.updateClaim = async (req, res) => {
  try {
    const updatedClaim = await Claim.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedClaim)
      return res.status(404).json({ message: "Claim not found" });
    res.json(updatedClaim);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Delete a claim.
 * @route DELETE /claims/:id
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
exports.deleteClaim = async (req, res) => {
  try {
    const deletedClaim = await Claim.findByIdAndDelete(req.params.id);
    if (!deletedClaim)
      return res.status(404).json({ message: "Claim not found" });
    res.json({ message: "Claim deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
