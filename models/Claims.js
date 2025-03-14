const mongoose = require("mongoose");

/**
 * Mongoose schema for Claim.
 * @typedef {Object} Claim
 * @property {string} companyReference - The reference of the company.
 * @property {string} policyNumber - The policy number.
 * @property {Date} incidentDate - The date of the incident.
 * @property {string} damageToVehicle - Description of vehicle damage.
 * @property {string} registrationNumber - Vehicle registration number.
 * @property {string} status - The current claim status ('Pending', 'Approved', 'Rejected', 'Completed').
 */
const claimSchema = new mongoose.Schema(
  {
    companyReference: { type: String, required: true },
    policyNumber: { type: String, required: true },
    incidentDate: { type: Date, required: true },
    damageToVehicle: { type: String, required: true },
    registrationNumber: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Claim = mongoose.model("Claim", claimSchema);
module.exports = Claim;
