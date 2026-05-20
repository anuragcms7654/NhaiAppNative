const url = "https://jsonplaceholder.typicode.com/todos/1";

const fetchApiFunc = async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort;
  }, 5000);
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    if (!res.ok) {
      const error = await res.json().catch(() => {});
      throw new Error(error.message || `HTTP ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("Request timeout");
    }
    throw err;
  } finally {
    clearInterval(timeout);
    console.log("Api function excecuted");
  }
};

fetchApiFunc();



