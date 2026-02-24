1️⃣ NEVER Load Entire File in Memory
-- Instead use streaming.
-- Node.js streams process file in chunks (buffers).

2️⃣ Use Streaming Middleware (Multer / Busboy)

-- npm install multer

const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 100 } // 100MB limit
});
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});


3️⃣ Use Streaming Directly to Cloud (Best Production Approach)

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

app.post("/upload", async (req, res) => {
  const s3 = new S3Client({ region: "ap-south-1" });

  const uploadStream = req; // stream

  await s3.send(new PutObjectCommand({
    Bucket: "my-bucket",
    Key: "large-file.mp4",
    Body: uploadStream
  }));

  res.send("Uploaded to S3");
});

4️⃣ Use Pre-Signed URLs (BEST PRACTICE)

Backend generates signed URL →
Frontend uploads directly to S3 →
Backend never handles file.


7️⃣ Handle Chunked Uploads (Very Large Files 1GB+)
use S3 multipart upload


8️⃣ Avoid Blocking the Event Loop
Heavy operations like:

Video compression and Image resizing

Should be handled by:
-- Worker threads
-- Background jobs
-- Queue system

9️⃣ Use Reverse Proxy for Large Payloads
Configure: NGINX

I use streaming instead of loading files into memory. For moderate files, I use Multer with disk storage and enforce file size limits. For production systems, I prefer generating pre-signed URLs so clients upload directly to S3, reducing backend load. I also validate file types, use rate limiting, and process heavy tasks like compression in background jobs using Bull and Redis.