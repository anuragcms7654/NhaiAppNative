const requestMap = new Map();

const rateLimiter = (limit, windowMs) => {
  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    if (!requestMap.has(ip)) {
      requestMap.set(ip, []);
    }

    const timestamps = requestMap.get(ip);

    // Remove old timestamps
    while (timestamps.length && timestamps[0] <= now - windowMs) {
      timestamps.shift();
    }

    if (timestamps.length < limit) {
      timestamps.push(now);
      next();
    } else {
      res.status(429).json({
        message: "Too many requests",
      });
    }
  };
};

app.use(rateLimiter(5, 60 * 1000));



// User
//  ↓
// CDN (Cloudflare rate limit)
//  ↓
// Load Balancer
//  ↓
// API Gateway rate limit
//  ↓
// Express rate limit
//  ↓
// Business Logic