class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

// var dog={
//     name:"wolfy",
//     age:12,
//     getName: function(){
//         return this.name
//     }
// }

// var cat={
//     name:"lily",
//     age: 13,
//     getName: function (param) {
//     return this.name
//     }
// }

// class Food {
//     constructor(type,brand){
//         this.type=type
//         this.brand=brand
//     }
//     getType(){
//         return this.type
//     }
//     getBrand(){
//         return this.brand
//     }
// }

// class Animal extends Food {
//     constructor(name, age,type,brand){
//         super(type,brand)
//         this.name=name
//         this.age=age
//     }
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
// }

// class Human extends Food {
//     constructor(name, age,type,brand){
//         super(type,brand)
//         this.name=name
//         this.age=age
//     }
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }

// }

// var dog=new Animal("wolfy",12,"dog","purina")
// var cat = new Animal("lilly", 13,"cat","friskies")
// var ryan = new Human("ryan",41, "human", "trader joes")
