const arrayy = [
  {
    emp: 1,
    name: "Anurag",
  },
  {
    emp: 2,
    name: "b",
  },
  {
    emp: 3,
    name: "Anurag",
    course: "abc",
  },
  {
    emp: 1,
    name: "Anurag",
  },
  {
    emp: 1,
    name: "Amit",
  },
];

const seen = new Set();

const unique = arrayy.filter((obj) => {
  const sorted = Object.keys(obj)
    .sort()
    .map((key) => `${key}:${obj[key]}`)
    .join("|");
  if (seen.has(sorted)) {
    return false;
  }
  seen.add(sorted);
  return true;
});

console.log(unique);
