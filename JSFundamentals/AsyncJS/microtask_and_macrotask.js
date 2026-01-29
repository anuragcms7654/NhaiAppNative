// microtask has higher priority than macrotask (after rpocess.nextTick)

// Microtask queue (urgent, immediate follow-up work) Contains:
// -- Promise.then / catch / finally
// -- await (code after await)
// -- queueMicrotask()

// Macrotask queue (regular async tasks) contains things like:

// -- setTimeout
// -- setInterval
// -- I/O callbacks (fs, network)
// -- setImmediate (Node)
// -- UI events (in browser)

// These run in event loop turns (ticks).

// Microtasks run immediately after the current execution and before any timers
//  or I/O, while macrotasks run in event loop turns like timers and I/O callbacks,
//  with all pending microtasks drained after each macrotask.”