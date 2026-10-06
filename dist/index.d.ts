declare let x: number, y: string, z: boolean, //incorrect 0 || 1
A: undefined, //only undefined
B: null, //only null
C: object, D: {
    name: "shimaa";
}, E: number[], F: Array<boolean>, G: () => number, H: any;
declare let I: unknown;
declare function myFun(): void;
declare let X: [number, string];
declare let Un: string | number;
declare let Correct: "A" | "B" | "C";
declare let user: {
    firstName: string;
    lastName: string;
};
type User = {
    readonly ID: number;
    firstName: string;
    lastName: string;
    age: number;
    userName?: string;
    getFullName?: (x: string, y: string) => string;
};
declare let user2: User;
declare let user3: User;
declare function myFun1(details: User): void;
type personality = {
    name: string;
    age: number;
};
type employee = {
    salary: number;
};
type test = personality & employee;
declare let user4: test;
interface IUser {
    name: string;
    age: number;
}
declare let user5: IUser;
declare let userName: unknown;
declare let person: string;
declare let person2: string;
declare class Student {
    private password;
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender: string);
    study(): void;
    getPass(): number;
    setPass(): void;
}
declare let object1: Student;
declare let object2: Student;
//# sourceMappingURL=index.d.ts.map