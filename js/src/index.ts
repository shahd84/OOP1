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


let x:number=5,
  y:string="Shahd",
  z:boolean=true,//incorrect 0 || 1
  A:undefined=undefined,//only undefined
  B:null=null,//only null
  C:object={},
  D:{name:"shimaa"}={name:"shimaa"},
  E:number[]=[10,20,30,40],
  F:Array<boolean>=[true,false],
  G:()=>number=function(){
    return 5;
  },
  H:any=5;
  H="shahd";
 let I:unknown="7.76549999";
 I=87.987654;

 if (typeof I=='number') {
    console.log(I.toFixed(2));  
 }

 

function myFun():void{
    console.log(x);
}


let X:[number,string]=[10,"string"];//tuple
let Un:string|number=10;//union
Un="what's its name";

let Correct: "A" | "B" | "C" ="A";//strict input

let user:{
    firstName:string,
    lastName:string
    
}={
    firstName:"shahd",

    lastName:"Alanani"};
//create data type
type User={
  readonly   ID:number,//can't edit it( not overwrite)
    firstName:string,
    lastName:string,
    age:number,
    userName? : string,//possible  come or not
    getFullName?:(x:string,y:string)=>string
};

let user2:User={
    ID:6753,
    firstName:"shahd",
    lastName:"alanani",
    age:21,
    getFullName:function(x,y){
        return x +" "+y;

    }
};
if(user2.getFullName!==undefined){
    user2.getFullName("","");


}
user2.getFullName?.(user2.firstName,user2.lastName);

let user3:User={
    ID:98765,
    firstName:"shahd",
    lastName:"alanani",
    age:21
};

function myFun1(details:User){
    details.age;
    details.firstName;
    details.lastName;
}
myFun1(user3);

type personality={
    name:string,
    age:number
};
type employee={
    salary:number
};
 type test= personality & employee;

let user4:test ={
    name:"shahd",
    age:21,
    salary:10000,

}

interface IUser{
     name:string,
    age:number
};

let user5:IUser={
    name:"shahd",
    age:21

}

let userName:unknown="shahd alanani";
let person:string=<string>userName;
let person2:string=userName as string; 

//introduction OOP => object oriented programming (DRY ) => Don't Repeat Yourself
  
/*
    -class => standard of object or frame
    -object
    -constructor =>method income class auto invoke  when i create new object
    -Accessor Modifier Or Accessor Specifier [Public private protected]




*/ 

class Student{
    //properties
    private password:number=234677; 
    public name:string="";
    public age:number=0;
    public gender:string="";


    //methods
    public constructor(name:string,age:number,gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.setPass();


    }
    public study() : void{
        console.log("studying");
    };

    public getPass():number{
        //any statement
        return this.password

    }
    public setPass():void{
        //any statement
         console.log(this.password);

    }


};

let object1=new Student("shahd",21,"female");
let object2:Student=new Student("Ahmed",87,"male");
object1.name="shahd Alanani";
console.log(object1.name);


















