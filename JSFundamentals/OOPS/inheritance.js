class Animal {
    speak(){
        console.log("Animals make sounds");
    }

}

class Dog extends Animal{
    bark(){
        console.log("dog barks");
    }
}

const d = new Dog();
d.speak();
d.bark();
