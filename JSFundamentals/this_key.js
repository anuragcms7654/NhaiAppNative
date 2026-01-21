const abj = {
    name: "Anurag",
    age: 30,
    welcomeNote: () => {
        console.log(this);
    },
    welcomeNoteFunc: function() {
        console.log(this);
    },
    greet() {
        console.log(this.name);
    },
}

abj.greet();
console.log(this);
