// Closure means a function remembers variables from its outer scope even after 
// the outer function has finished executing.

// In simple words:
// 👉 Inner function + outer function variables = closure


// example 1
function createAuth() {
    let token = 'secret';
  
    return {
      getToken() {
        return token;
      },
      refreshToken(newToken) {
        token = newToken;
      }
    };
  }
  
  const auth = createAuth();
  auth.refreshToken('newSecret');
  console.log(auth.getToken()) // secret


//   2nd example 
  function fetchWithRetry(retries) {
    return async function fetchData() {
      try {
        // API call
      } catch {
        if (retries > 0) {
          retries--;
          return fetchData();
        }
      }
    };
  }
  