# CORS (Cross-Origin Resource Sharing)

-- CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls how a web page from one origin can access resources from another origin.


---- this is invalid ----
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
---- this is invalid ----


npm install cors
const cors = require("cors");


const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://yourdomain.com", "https://admin.yourdomain.com"]
    : ["http://localhost:3000", "http://localhost:5173"];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

