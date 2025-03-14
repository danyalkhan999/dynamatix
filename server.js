const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db.js");
const claimRoutes = require("./routes/claimRoutes.js");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", claimRoutes);

const PORT = process.env.PORT || 5000;

/**
 * Start the Express server.
 * @returns {void}
 */
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
