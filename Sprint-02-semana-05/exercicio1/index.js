var User = /** @class */ (function () {
    function User(name, lastName, age, isOlderThanEighteen, favoriteFoods) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.isOlderThanEighteen = age > 18;
        this.favoriteFoods = favoriteFoods;
        this.fullName = name + lastName;
    }
    User.prototype.setFullName = function (name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.fullName = name + " " + lastName;
    };
    User.prototype.showUserData = function () {
        console.log("Nome Completo: ".concat(this.fullName));
        console.log("Idade: ".concat(this.age));
        console.log("Comidas Favoritas: ".concat(this.favoriteFoods));
    };
    return User;
}());
var user = new User("Sâmi", "Carvalho", 21, true, ["Pizza, Sopa, Mousse de Maracujá"]);
user.setFullName("Sâmi", "Carvalho");
user.showUserData();
