class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log(this.name + 'barks. ');
    }
}
d = new Dog ('Rex');
d.bark();