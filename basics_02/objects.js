// let symb1=Symbol("mykey1")                // interview mai poochte hain ki symbol define krke apne key mai add krke dikahao
let obj1={
    name:"Hameem",
    class:"8th B",
    rollno: " 34",
    "usn":"1mj21is039",
    // [symb1]:"mykeyvalue"
}
// console.log(obj1.name)
// console.log(obj1["usn"]) 
// console.log(obj1[symb1])
// console.log(typeof(symb1)) 

// obj1.greetings=function(){
//     console.log(`hello ${this.name} we are pleased to have you here! `)
// }
// console.log(obj1.greetings())


// obj1.greetings=function(){
//     console.log(`hello ${this.name} with roll no ${this.rollno} is selected as the president of america`)
// }
// console.log(obj1.greetings()) 

// const object1=new Object()

// object1.name={
//     userfirstname:"Hussain",
//     userlastname:{                                 /// we can use the nested objects like shown in the example
//         firstinitials:"Ha",
//         lastinitials:"em"

//     }

// }
// object1.usn="1mj21is039"
// object1.address="alamgari bazar srinagar 190011"

// console.log(object1.name.userlastname.firstinitials)


// let obj11={1:"a",2:"b"}
// let obj22={3:"c",4:"d"}

// let obj33=Object.assign({},obj11,obj22)                  // object.assign will make sure that the two objects will assign together as a single array

// console.log(obj33) 

// we can also use the spread operator inorder to assign te two objects together

// let obj33={...obj11, ...obj22}             
// console.log(obj33)                // it is more easier than the assign operator we will be using it more often 


// ------> we can also have array of objects

let object22=[
    {
        id:12,
        name:"Hameem",
        usn:"1MJ21IS039"

    },
    {
        id:13,
        name:"basit",
        usn:"1MJ2IS039"
    }
]

// console.log(object22[1].name)

// console.log(Object.keys(obj1))             // ye bohot bohot bohot important cheeze hai ki ham objects ki keys ko as an array bana kar uspr looping kar sakte hai

// console.log(Object.values(obj1))           // // ye bhi bohot bohot bohot important cheeze hai ki ham objects ki values ko as an array bana kar uspr looping kar sakte hai


console.log(Object.entries(obj1))             // ye har kisi key ar value ko aik alg array mai rakhta hai


console.log(obj1.hasOwnProperty("branch"))         // checks if a particular propperty is present in a object or not