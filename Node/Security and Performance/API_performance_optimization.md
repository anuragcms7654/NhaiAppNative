1. At Architecture level, if we have very large amount of users, use consistant hashing and database sharding

2. At database level 
-- use indexing for large data,- TC will reduce to (logn) - uses binary search for that.
-- ✅ Avoid N+1 Query Problem, Use JOIN or aggregation instead.
-- select only required fields, this will reduce memory and increase network transfer speed
-- ✅ Use Query Optimization Tools - EXPLAIN in SQL and Analyze slow queries

3. 2️⃣ Caching (Huge Performance Boost)
For In-Memory Caching Use:
-- Redis
-- Memcached


3️⃣ Response Size Optimization
--Enable GZIP / Brotli Compression
## code ##
const compression = require("compression");
app.use(compression());
## code ##
-- it Reduces response size up to 70%.

4. ✅ Pagination (Very Important)

5. Use:
async/await
worker threads for heavy computation
background jobs


6. 5️⃣ Rate Limiting
express-rate-limit

const rateLimit = require("express-rate-limit");

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

7️⃣ Use Load Balancing

If traffic increases:
Run multiple server instances
Use load balancer


8️⃣ Use CDN for Static Content

For images, files:
Use:
Cloudflare
Amazon Web Services
CDN reduces backend hits.


9️⃣ Use Efficient Data Structures

Example:
❌ Searching in array repeatedly → O(n)
✔️ Use Map/Object → O(1)


🔟 Logging & Monitoring

Use:
New Relic
Datadog
Grafana


##### Most Important (If You Remember Only 5 Things) ####

1. DB indexing
2. Caching (Redis)
3. Pagination
4. Compression
5. Load balancing
6. These give maximum performance impact.