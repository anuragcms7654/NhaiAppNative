function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

function con(data){
    console.log(data);
}

fetchData(con);
