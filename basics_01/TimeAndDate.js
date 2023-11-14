let DateAnother=new Date()
console.log(DateAnother.toString())
// console.log(DateAnother)

let DateTo=new Date("06-21-2002")
console.log(DateTo.toLocaleString())

let TimeStamp1=Date.now()
console.log(Math.floor(Date.now()/1000));                //gives the least value without the decimal pointer

let newDate=new Date()
console.log(newDate)
console.log(newDate.toString)
console.log(newDate)

let DateAnother=new Date()


console.log(DateAnother.toLocaleString('default',{
    weekday:"long",
    day:"numeric",
    year:"numeric",
    timeZoneName:"longGeneric"

}))
console.log(DateAnother.toString())
console.log(DateAnother)
let dateAnother=new Date()
console.log(dateAnother.toLocaleString('default',{
    weekday:"long",
    month:"long"

}))


