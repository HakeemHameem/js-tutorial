// const arr=["hameem","ahrar","bassit"]
                                        
// for(const num of arr ){                           // it is for off loop in javascript
//     console.log(num)
// }




const map=new Map()
map.set('in','india')
map.set('usa','united states of america')
map.set('aus','austrila')

for (const [key,value] of map) {                        //aise ham lykin objects mai iterate nai kar sakte ye bas maps mai iterate ho sakta hai for objects ham "forin" loop use kare ge 
    // console.log(key,'->>'+value)
    
}



/// for objects

const object1={
    name:"Hameem",
    class:"4th B",
    rollno:"2"
}

for (const key in object1) {
    // console.log(`the ${key} is ${object1[key]}`)
   
        
    }


    // for arrays

    const ham=["ham","sam","ram"]

    for (const key in ham) {
 
        // console.log(`the ${key} is ${ham[key]}`)             // arrays ki bhi keys hoti hain jaise ki 0,1,2,3 ye sab arrays ki keys hoti hain
      
    }


    //for each loop

    let modi=["bjp","amit","shah"]

   modi.forEach(function(val){
    // console.log(val)


   })


   let aam=["gNDHI","RAHUL","sonia","ggg"]

   aam.forEach(function (item){
    // console.log(item)
           
   })
   function aam1(){
    // console.log("i am a function")                 
   }

   aam.forEach(aam1)                      // for each ko ham as a refrence bhi use kar sakte hain jaise hamne function aam1() ko chalaya aam array sai 


   let threeparameters=["ham","ram","dam"]

   threeparameters.forEach(function (item,index,array){         // actually parameters of foreach has three parameters i.e item,index and array
    console.log(item,index,array)
   })

  /// accessing array of objects using forEach
  
  const loopy=[
    {
        name:"hameem",
        id:"1"
    },
    {
        name:"azhar",
        id:"2"
    },
    {
        name:"tabish",
        id:"3"
    }
  ]

  loopy.forEach((item)=>{
    console.log(item.id)
  })
