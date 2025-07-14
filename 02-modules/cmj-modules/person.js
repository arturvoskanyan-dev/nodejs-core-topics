class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        return `Hello ${this.name}`
    }
}

// exports.obj = {
//     person: Person
// }

module.exports = Person