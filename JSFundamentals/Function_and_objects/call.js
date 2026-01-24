function showname(x) {
  console.log(`hi ${this.name}, ${x}`);
}
const user = {
  name: "anurag",
  address: "bhagalpur",
};
const data = showname.bind(user, "bhagalpur");
data()

// const employee = {
//   getDetails(department) {
//     console.log(`${this.name} works in ${department}`);
//   },
// };

// employee.getDetails.call(user, "Engineering");

// const car = {
//   brand: "Tesla",
//   getBrand() {
//     console.log(this.brand);
//   },
// };

// // car.getBrand();

// const showBrand = car.getBrand;
// showBrand()
// showBrand.call(car);
