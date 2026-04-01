Basic/System Control
1. os: Provides system-related utility functions. Example: os.freemem(), os.totalmem().
example : 
const os = require('os');
if (os.freemem() < 500000000) {
  console.log("Low memory! Take action.");
}
2. util: General utility functions primarily used for debugging. Example: util.inspect().

File System Handling
1. fs: Offers extensive file system capabilities. Commonly used methods include fs.readFile() and fs.writeFile().

Networking
1. http/https: Implements web server and client. Example: http.createServer().
2. net: Facilitates low-level networking tasks. Example: net.createServer().
3. dgram: Delivers UDP Datagram Socket support for messaging.

Utility Modules
1. crypto: Encompasses cryptographic operations. Common methods include crypto.createHash() and crypto.createHmac().
2. zlib: Offers data compression capabilities integrated with various modules like http.
3. stream: Facilitates event-based data stream processing.

Others
1. path: Aids in file path string manipulation.
2. url: Parses and formats URL strings, especially beneficial in web applications and server operations.