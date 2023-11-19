//map method
const arr=[2,3,4,5]

let a=arr.map((item,index)=>{                        // same as forEach bas ye ek naya array daita hai hamay

        //   console.log(item,index)
          return item+1
          
})
// console.log(a)

// filter method

const arr1=[2,3,4,5]
let b=arr1.filter((item)=>{                    // sets a conditions which items should be returned
    return item<=3
})
// console.log(b)

//reduce method

const arr2=[2,3,4,5]
let c=arr1.reduce((item1,item2)=>{                    //ye two values ko lega add karay ga phir us value ko next number ke saath add up karay ga 
    return item1+item2
})
// console.log(c)
// issi ko ham aise bhi likh sakte hain


function dam(h1,h2){
    return h1+h2
}                                                          // ham loug function ko as a variable bhi  de sakte hain
let d=arr2.reduce(dam)

console.log(d)

