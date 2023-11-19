// function addTwoNumbers(num1,num2){
//      if(typeof num1=="number"){
//          console.log("passed")
        
//      }
//      if(typeof num2=="number"){
//          console.log("passs 2")
//      }

//     console.log(num1+num2)

// }

// addTwoNumbers(2,2)

// function user(username){
//     return `${username} just logged in`

// }

// console.log(user("Hameem"))

// function ham(...num1){                  // ... these three dots are known as floor operator that means ki ham aik argument deke kayi values aik array ki form mai print kar wa sakte hai
     
//     return num1

// }

// console.log(ham(1,200,300,40))

// function ahr(val1,val2,...num1){                                 //200 will go in val1 and 300 will go in val2 and rest we will be getting at output
//     return num1
// }
// console.log(ahr(200,300,400,500))

 
                // *********************************************************************************************//

// const obj1={
//     name:"Hameem",
//     usn:"1mj21is039",
//     branch:"ise"
// }
//                                                                                       // it is a way to use a object in a function
// function ham(objfun){
//     return `the name is ${objfun.name} and the branch is ${objfun.branch}`

// }

// console.log(ham(obj1))



// function bas(objfua){
//     return ` name is ${objfua.name1}`

// }                                                            // ham log wahii object banake call bhi  kar sakte hain zoroori nia hain ki wahi sai bana ho

// console.log(bas({
//     name1:"Aleem",
//     usn:"1mj778"
// }))


// let arr=[2,3,4,5]

// function daa(newarr){                                              /// ham loug array par bhi same kaam kar sakte hain
//     return newarr[1]

// }

// console.log(daa(arr))


// function daa1(newarr1){                                         
//     return newarr1[1]

// }

// console.log(daa1([
//     2,10,4,5,6
// ]))


// function arrp(objjj){
//     return `hi im good ${objjj.class}`
// }

// console.log(arrp({
//     name12:"Hameem",
//     class:"4th b",
//     rollno:"1mj21is039"
// }))

// function father(){
//     const naav="Hitesh"


//     function child(){
//         console.log(naav)
//     }
//     child()
// }
//  father()


//   if(true){
//       const username="hitesh"
//       if(username==="hitesh"){
//         const ham="youtube"
//         console.log(username+ham)
//       }
//     //   console.log(ham)
// }
// console.log(username)

function alam(object){
    return object+1
}

const daa=function(object){                    // hoisting of variables in javascript    
    return object+2
}
console.log(alam(5))
console.log(daa(5))





