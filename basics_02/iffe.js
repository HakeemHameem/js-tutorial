// immediate invoked function expression is used to clear the pollution in the global scope and immediate execution of the code

(function ham(){
    console.log("db connected")
})();


((name)=>{
    console.log(`my name is ${name}`)            // iffe function mai ham variables ka bhi isitimaal kar sakte hai

})("hitesh")