// ES6
// Constructor / prototype
function Person(name) {
    this.name = name
}

Person.prototype.getName = function () {
    console.log(this.name)
}

// Class
class Person1 {
    constructor(name) {
        this.name = name
    }

    // getName() {
    //     return this.name
    // }
    // setName(newName) {
    //     return this.name = newName
    // }

    /**getter & setter*/
    get name() {
        return this._name
    }

    set name(newName) {
        return this._name = newName
    }
}

const viet = new Person1("Viet");
// console.log(viet.getName());
// viet.setName('Henry');
// console.log(viet.getName())
console.log(viet.name);
viet.name = "Henry";
console.log(viet.name);

// Class expression
let Student = class {
    constructor(name) {
        this.name = name
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        return this._name = newName
    }

}
const evon = new Student("Evon");
console.log(evon.name)

function company(aClass) {
    return new aClass()
}


let hello = company(class {
    sayHello() {
        console.log('Hello')
    }
});
hello.sayHello()

// Static method
// Định nghĩa một phương thức với từ khóa static sẽ giúp cho phương thức đó của class có thể được gọi mà không cần phải khởi tạo một Object instance.
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date
    }

    static compare(a, b) {
        return a.date - b.date
    }
}

let articles = [
    new Article("HTMl", new Date(2022, 2, 1)),
    new Article("CSS", new Date(2022, 2, 5)),
    new Article("JS", new Date(2022, 2, 3))
]
articles.sort(Article.compare);
console.log(articles[0].title)

// Static properties
class Item {
    constructor(name) {
        this.name = name;
        // syntax: this.constructor.propertyName
        this.constructor.count++
    }
    static count = 0;
    static getCount() {
        // syntax: className.propertyName
        return Item.count
    }
}
const pencil = new Item("Pencil");
const laptop = new Item("Laptop");
console.log(Item.getCount());

// Super & extends
class Animal {
    constructor(legs) {
        this.legs = legs
    }
    walking() {
        console.log(`walking on ${this.legs} legs`)
    }
}
class Bird extends Animal{
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log("i can fly")
    }
}
let bird = new Bird(2);
bird.walking()