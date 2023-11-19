const ham22=['hydrogen','helium','oxygen']

// console.log(ham.map((ham)=>(ham.length)))


const ham1=(para1,para2)=>{
    return para1+para2                                              // THIS IS THE ARROW FUNCTION........ 


}

console.log(ham1(4,5))

const ham={
    name:"Hameem",
    usn:"1mj21is039",
    section:"ba",
    branch:"ise",
    welcomessage:function add()
    {
        return `i am fine ${this.name}`

    }

    
    
}
console.log(ham.welcomessage())



function one(){
    const username="Hameem"                     

    console.log(this)                 // normal function mai tujay boht see chheze return hongi
}
one()


const two=()=>{
    const username="Hameem"              // arrow function mai this() use karo ge tou empty object mile ga.. issi liye arrow function mai this() use nai krte                     

    console.log(this)
}
two()



const hameem=(num1,num2)=>{
    return num1+num2
      
}
console.log(hameem(2,3))


const ahrar=(num3,num4)=>(num3+num4)               /// implicit declaration of an arrow function
      

console.log(ahrar(5,5))



const abrar=()=>({name:"hameem"})

console.log(abrar())