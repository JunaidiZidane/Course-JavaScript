function Contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = function (){
        x = this.name
        y = this.number
        console.log(x+": "+y)
    }
}

a = new Contact("David", 12345);
b = new Contact("Amy", 987654321)
a.print();
b.print();