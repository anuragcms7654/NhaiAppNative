// what are disserent routes in Api's
// diff between put and update
// remove duplicates from obj
// fetch api optimization, if we have 10000 user, how to improve performance
// What are different type of API's
// how you integrated LLM.

// const api = 'https://jsonplaceholder.typicode.com/todos/1';

// async function fetchData() {
//   try {
//     const response = await fetch(api);
//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//     const data = await response.json();
//     console.log('API Response:', data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// fetchData();

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

const unique = arrayy.filter(obj => {
  const sorted = Object.keys(obj).sort().map(key => `${key}:${obj[key]}`).join('|');
  if(seen.has(sorted)){
    return false
  }
  seen.add(sorted);
  return true
})

console.log(unique);

