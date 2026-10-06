"use strict";
/*
  -primitive =>Value Typed =>Stack
    .String
    .Number
    .Boolean
    .Null
    .Undefined
    
  -Non-primitive =>Reference Typed =>heap
    .Array<Data Type>
    .Void
    .Any =>Data Type retrieve from Back End
    .Unknown
    .Tuple
    .union
    .alias
    .interface

*/
let x = 5, y = "Shahd", z = true, //incorrect 0 || 1
A = undefined, //only undefined
B = null, //only null
C = {}, D = { name: "shimaa" }, E = [10, 20, 30, 40], F = [true, false], G = function () {
    return 5;
}, H = 5;
H = "shahd";
let I = "7.76549999";
I = 87.987654;
if (typeof I == 'number') {
    console.log(I.toFixed(2));
}
function myFun() {
    console.log(x);
}
let X = [10, "string"]; //tuple
let Un = 10; //union
Un = "what's its name";
let Correct = "A"; //strict input
let user = {
    firstName: "shahd",
    lastName: "Alanani"
};
let user2 = {
    ID: 6753,
    firstName: "shahd",
    lastName: "alanani",
    age: 21,
    getFullName: function (x, y) {
        return x + " " + y;
    }
};
if (user2.getFullName !== undefined) {
    user2.getFullName("", "");
}
user2.getFullName?.(user2.firstName, user2.lastName);
let user3 = {
    ID: 98765,
    firstName: "shahd",
    lastName: "alanani",
    age: 21
};
function myFun1(details) {
    details.age;
    details.firstName;
    details.lastName;
}
myFun1(user3);
let user4 = {
    name: "shahd",
    age: 21,
    salary: 10000,
};
;
let user5 = {
    name: "shahd",
    age: 21
};
let userName = "shahd alanani";
let person = userName;
let person2 = userName;
//introduction OOP => object oriented programming (DRY ) => Don't Repeat Yourself
/*
    -class => standard of object or frame
    -object
    -constructor =>method income class auto invoke  when i create new object
    -Accessor Modifier Or Accessor Specifier [Public private protected]




*/
class Student {
    //properties
    password = 234677;
    name = "";
    age = 0;
    gender = "";
    //methods
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.setPass();
    }
    study() {
        console.log("studying");
    }
    ;
    getPass() {
        //any statement
        return this.password;
    }
    setPass() {
        //any statement
        console.log(this.password);
    }
}
;
let object1 = new Student("shahd", 21, "female");
let object2 = new Student("Ahmed", 87, "male");
object1.name = "shahd Alanani";
console.log(object1.name);
//# sourceMappingURL=index.js.map