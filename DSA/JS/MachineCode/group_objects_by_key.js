const userss = [
    { name: "Alice", age: 25 },
    { name: "Bob",   age: 30 },
    { name: "Carol", age: 25 },
    { name: "Dave",  age: 30 },
    { name: "Eve",   age: 25 },
]

const groupBy = (users, key) => {
    const obj = {};
    for (let i of users){
        if (i[key] in obj){
            obj[i[key]].push(i)
        }else{
            obj[i[key]] = [i]
        }
    }
    return obj;
}

const x = groupBy(userss, 'age');
console.log(x);
