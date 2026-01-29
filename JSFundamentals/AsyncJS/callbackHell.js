const users = {
  1: { id: 1, name: "Rahul", email: "rahul@gmail.com" },
};

const orders = {
  1: [{ id: 101, item: "Laptop", price: 60000 }],
};

const payments = {
  101: { orderId: 101, status: "PAID", method: "UPI" },
};

// function getUser(userId, callback) {
//   setTimeout(() => {
//     callback(null, users[userId]);
//   }, 1000);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     callback(null, orders[userId]);
//   }, 1000);
// }

// function getPayment(orderId, callback) {
//   setTimeout(() => {
//     callback(null, payments[orderId]);
//   }, 1000);
// }

// function sendEmail(email, callback) {
//   setTimeout(() => {
//     callback(null, `Email sent to ${email}`);
//   }, 1000);
// }

// getUser(1, function (err, user) {
//   if (err) return console.error(err);

//   console.log("User:", user);

//   getOrders(user.id, function (err, userOrders) {
//     if (err) return console.error(err);

//     console.log("Orders:", userOrders);

//     getPayment(userOrders[0].id, function (err, payment) {
//       if (err) return console.error(err);

//       console.log("Payment:", payment);

//       sendEmail(user.email, function (err, result) {
//         if (err) return console.error(err);

//         console.log(result);
//       });
//     });
//   });
// });

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   callback(null, users[userId]);
      const userOrders = orders[userId];
      if (!userOrders) return reject("Orders not found");
      resolve(userOrders);
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userOrders = orders[userId];
      if (!userOrders) return reject("Orders not found");
      resolve(userOrders);
    }, 1000);
  });
}

function getPayment(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const payment = payments[orderId];
      if (!payment) return reject("Payment not found");
      resolve(payment);
    }, 1000);
  });
}

function getPayment(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const payment = payments[orderId];
      if (!payment) return reject("Payment not found");
      resolve(payment);
    }, 1000);
  });
}
function sendEmail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email) return reject("Invalid email");
      resolve(`Email sent to ${email}`);
    }, 1000);
  });
}

getUser(1)
  .then((user) => {
    console.log("User:", user);
    return getOrders(user.id);
  })
  .then((userOrders) => {
    console.log("Orders:", userOrders);
    return getPayment(userOrders[0].id);
  })
  .then((payment) => {
    console.log("Payment:", payment);
    return sendEmail("rahul@gmail.com");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

// console.log(data);
