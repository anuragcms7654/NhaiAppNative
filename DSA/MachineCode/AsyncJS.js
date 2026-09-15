// 9. Implement Promise
// Basic structure (then, catch)

const promiseFn = (a) => {
  return new Promise((resolve, reject) => {
    if (a >= 1) {
      setTimeout(() => {
        console.log(a);
        resolve(a * 1000);
      }, a * 1000);
    } else {
      reject((err) => console.log(err, "promise err"));
    }
  });
};

const promiseAll = async () => {
  const [a, b, c] = await Promise.all([
    await promiseFn(3),
    await promiseFn(4),
    await promiseFn(1),
  ]).catch((e) => console.log(e));
  console.log(a, b, c);
};

promiseAll();

// 10. Polyfill for Promise.all
// Promise.all = function(promises) {}

// 11. Debounce function
// debounce(fn, delay)

// 12. Throttle function
// throttle(fn, limit)

const throttle = (ip, timeMs) => {
  const maps = new Map();
  return (req, res, next) => {
    const now = Date.now();
    if (!maps.has(ip) && now - maps.get(ip) > timeMs) {
      maps.set(ip, now);
      next();
    } else {
      throw error("Too many requests");
    }
  };
};

// 13. Retry API call N times
// retry(apiCall, 3)

const retry = (apicall, attempt) => {
  let lastError;

  for (let i = 0; i < attempt + 1; i++) {
    const res = apiCall();
    if (res.success) {
        return result
    }else{
        lastError = error;
    }
  }

  return lastError
};

// 14. Convert callback → promise
// promisify(fn)


