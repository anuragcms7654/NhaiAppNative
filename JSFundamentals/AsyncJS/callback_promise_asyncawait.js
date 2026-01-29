function fetchData(callbackFn){
    setTimeout(() => {
        callbackFn();
    }, 1000)
}

const callbackFn = (c) => {
    console.log(c)
}

fetchData(() => callbackFn("data"))

// If you give it a non-promise value, JavaScript silently
//  wraps that value in a resolved promise using:
// Promise.resolve(value)
// The result of await is simply that value

// no await, no catch (in try catch block)