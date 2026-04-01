# What is node.js and why is it used?

-- Node.js is a opensource javascript runtime environment which excecutes outside a web-browser
-- It is build on V8 engine, the chrome engine wrapped around c++ code which provides server side development, non blocking I/O operation, event driven feature, etc.

Use-Cases
-- suits for chats application, streaming applications, application which needs real times updates because it can handle concurrent request very efficiently
-- not suitable for heavy computational tasks.


# 2. How does Node.js handle child threads?
-- Node.js runs on a single thread, but for heavy tasks it sends the work to background threads. This is handled using a thread pool and worker threads. Once the task is done, the result comes back to the main thread, so the app doesn’t get blocked.

-- Thread pool (libuv): Node.js automatically uses it for background tasks like file reading, database calls, or crypto. You don’t control it—Node handles it behind the scenes.

-- Worker threads: You use them manually when you have heavy CPU work (like loops, calculations). They run in separate threads.

# Describe the event-driven programming in Node.js.
-- Node.js follows an event-driven programming model where everything works around events and callbacks. When a request comes in, it is registered as an event, and Node.js does not wait for it to finish—instead, it moves to the next task. Once the operation is complete, a callback function is executed.

This is managed by the event loop, which keeps listening for events and handles them one by one, allowing Node.js to handle many requests efficiently without blocking.


# What is event loop?
-- Event loop is a continuous loop in Node.js that keeps checking if there is any work to do. 
-- JavaScript is single-threaded, so without it, every DB call or file read would freeze the entire app. 
-- So instead of waiting, node sends the work like DB calls, file I/O to the OS or thread pools and the event loop stays free to handle other incoming requests. 
-- When the OS is done, it notifies Node, and the event loop picks up the callback and executes it.

# What is package.json file?
-- 