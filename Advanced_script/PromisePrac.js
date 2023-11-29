// const promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async is Activated")
//         resolve()
//     },1000)
// })

// promise.then(function(){
//     console.log("Promise Consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Sync is Activated")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise is consumed")
// })

const Prom=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if (!error) {
            
            console.log("the settimeout is activated")
            resolve({name:"Hameem",usn:"1MJ21IS039",branch:"ise"})
        }
        else{
            console.log("error")
        }

    },1000)
})
Prom.then(function(usser){
    console.log(usser)   
    
})