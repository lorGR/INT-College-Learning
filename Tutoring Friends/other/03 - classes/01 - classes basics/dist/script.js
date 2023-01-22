var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(names, age) {
        this.names = names;
        this.age = age;
    }
    Animal.prototype.makeSound = function () {
        return "Some noise";
    };
    Animal.animalColor = function () {
        console.log("This is animal private method");
    };
    Animal. = function () {
        console.log("Animal Only");
    };
    ;
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(names, age, weight) {
        var _this = _super.call(this, names, age) || this;
        _this.weight = weight;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        return "Bark!!!";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(names, age, height) {
        var _this = _super.call(this, names, age) || this;
        _this.height = height;
        return _this;
    }
    Cat.prototype.makeSound = function () {
        return "Meow!!!";
    };
    return Cat;
}(Animal));
var a1 = new Animal("Balu", 7);
var b1 = new Dog("Balu", 7, 8);
var c1 = new Cat("Julia", 18, 5);
console.log(a1.makeSound());
console.log(b1.makeSound());
console.log(c1.makeSound());
Animal.animalColor();
