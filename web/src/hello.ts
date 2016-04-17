class Greeter {
    constructor(public greeting: String) {}
    
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
}

var greeter = new Greeter("Hello World!");
    document.body.innerHTML = greeter.greet();