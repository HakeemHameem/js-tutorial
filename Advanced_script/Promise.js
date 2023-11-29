// promise ka pehla tareeqa

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//Promise KA Doosra Tareeqa

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//Promise sai Data Pass Karana
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})           //resolve mai ziyada tar argument object he hoota hain hamare pass
    }, 1000)
})

promiseThree.then(function(user){                                /// console.log mai resolve ka data print hojaye ga
    console.log(user);
})

// Promise Mai Reject Keyword KA MaqSad
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


//Promise using Async Keyword

const PromiseFive=new Promise(function(resolve,reject){
    let error=false
    if (!error) {
        resolve({username:"Hameem",Usn:"1MJ21IS039",Branch:"ISE"})
        
    }else{
     console.error("Its Error");
    }

})


async function Promisefive(){
     
     try {

         const response=await PromiseFive
         console.log(response)
        
     } catch (error) {
        console.log(error)
        
     }
}

Promisefive()

//getting the data using async Await fetch

async function getAllUsers(){
    try {
        
        const data=await fetch('https://api.github.com/users/hiteshchoudhary')        //this is how do you get the async await fetch and take the data from a site to fetch
        const response=await data.json()
        console.log(response)
    } catch (error) {
        console.log(error)
        
    }
}

getAllUsers()
// short from of using the fetch 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

