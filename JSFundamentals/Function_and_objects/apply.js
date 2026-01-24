const logger = {
  log(level, message) {
    console.log(`[${level}] ${this.name}: ${message}`);
  },
};

const service = { name: "AuthService" };

const args = ["ERROR", "Token expired"];

logger.log.apply(service, args);
