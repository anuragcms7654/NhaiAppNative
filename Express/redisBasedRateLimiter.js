// npm install rate-limit-redis redis


const RedisStore = require("rate-limit-redis");
const { createClient } = require("redis");

const redisClient = createClient();
await redisClient.connect();

const limiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  }),
  windowMs: 60 * 1000,
  max: 100,
});

app.use(limiter);
