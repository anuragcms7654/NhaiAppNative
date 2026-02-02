# 1.  What is Node.js?
-- Node.js is a runtime that lets you run JavaScript outside the browser, mainly on the server.

* Under the hood:
-- Uses Google’s V8 engine (same as Chrome) to execute JS
-- Built on top of libuv, a C library that provides async I/O, event loop, and thread pool

* Not ideal for:
-- Heavy CPU work (image processing, big loops, encryption in pure JS)

***********************************************************************

# 2. Why is Node.js single-threaded?
-- Node.js is single-threaded to keep execution simple and fast.
Instead of creating multiple threads, it handles concurrency using asynchronous, non-blocking I/O.
The event loop efficiently manages thousands of concurrent operations without thread overhead.

# 3. How does Node.js handle concurrency?
-- Node.js handles concurrency using an event-driven, non-blocking I/O model.
Long-running tasks (like file I/O, DB calls, or network requests) are delegated to the system or thread pool, while the event loop continues executing other code.
Once the operation completes, its callback/promise is queued and executed without blocking the main thread.

# 4. What is event loop?
-- The event loop is the core mechanism that allows Node.js to perform non-blocking, asynchronous operations on a single thread.
It continuously checks task queues (timers, I/O, promises, etc.) and executes their callbacks when the call stack is free.

# 5. Difference between node js and browser js?
-- node js runs on server and used in backend development, and browser js runs on browser used for UI and dom manipulations.
-- node js contains api like, fs, http, path, process, OS access whereas browser js provide window, document, DOM, local storage.
-- node Handles I/O, timers, promises whereas browser Handles UI events, timers, promises

# 6. process.NextTick and SetImmediate.
-- process.nextTick() schedules a callback to run immediately after the current operation, before the event loop continues.
-- setImmediate() schedules a callback to run in the Check phase of the event loop, after I/O events.

-- Use nextTick for critical microtasks and setImmediate for post-I/O or non-blocking deferred work.

# 7. What is check Phase?
-- The Check phase is the event loop phase where setImmediate() callbacks execute, immediately after I/O callbacks (Poll phase) finish.

