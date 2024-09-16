
interface Person {
    name: string;
    lastName: string;
    age: number;
    isOlderThanEighteen: boolean;
    favoriteFoods: string[];
  }
  
class User implements Person {
    name: string;
    lastName: string;
    age: number;
    isOlderThanEighteen: boolean;
    favoriteFoods: string[];
    fullName: string;

    constructor(name: string, lastName: string, age: number, isOlderThanEighteen: boolean, favoriteFoods: string[]) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.isOlderThanEighteen = age > 18;
        this.favoriteFoods = favoriteFoods;
        this.fullName = name + lastName;
    }

    setFullName(name: string, lastName: string): void {
        this.name = name;
        this.lastName = lastName;
        this.fullName = name + " " + lastName;
        
    }

    showUserData(): void {
        console.log(`Nome Completo: ${this.fullName}`);
        console.log(`Idade: ${this.age}`);
        console.log(`Comidas Favoritas: ${this.favoriteFoods}`);
    }
}


const user = new User ("Sâmi", "Carvalho", 21, true, ["Pizza, Sopa, Mousse de Maracujá"]);
user.setFullName("Sâmi", "Carvalho")
user.showUserData()

