import logger from "@am92/api-logger";
import ExpressUtils from "@am92/express-utils";

import { SERVICE } from "./config/SERVER_CONFIG.mjs";

const PORT = 9001;

const startServer = async (app) => {
  try {
    // Initialize Express Utils
    await ExpressUtils.initialize();

    // Start Server
    await app.listen(PORT);
    logger.success(
      `[${SERVICE}] Server Started Successfully! Listening on Port: ${PORT}`
    );
  } catch (error) {
    const errorMessage = `[${SERVICE}] ${error.message}`;
    logger.error(errorMessage, error);
    throw error;
  }
};

export default startServer;
