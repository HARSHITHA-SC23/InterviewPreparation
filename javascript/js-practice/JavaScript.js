// How JavaScript code is executed and call stack:
// var n=2;
// function square(num) {
//     var ans = num*num;
//     return ans;
// }

// var square2 = square(n)
// var square4 = square(4);

//Lexical environment

// function a() {
//     var b =10
//     c()
//     function c(){
//         console.log(b)
//     }
// }
// a()

// Let and const
// var f=20
// let e =11
// {
//     let f=2
//     let e=10
//     const g =19
//     console.log(f)
//     console.log(e)
//     console.log(g)
// }

// {
//     var f=2
//     let e=10
//     const g =19
//     console.log(f)
//     console.log(e)
//     console.log(g)
// }

// console.log(f)
// console.log(e)
// console.log(g)

// Lexical scope in block scope of let and const

// const a =2
// {
//     const a = 20
//     {
//         const a =200
//         {
//             const b=10
//             console.log(a)
//         }
//         console.log(b)
//     }
// }

// Closures
// function x(){
//     var a=23;
//     function y(){
//         console.log(a)
//     }
//     a=100
//     return y
// }

// var returnedY = x();
// console.log(returnedY)

// returnedY();

// Interview Question on Closure

// function x() {
//     var i =1;
//     setTimeout(function() {
//         console.log(i)
//     }, 1000)
//     console.log("setTimeout")
// }
// x();

// Write a JavaScript function that prints numbers in sequence, 
// where each number is printed after its corresponding number of seconds 
// (e.g., 1 after 1 second, 2 after 2 seconds, and so on)

// function sequence(n){
//     for(var i=1; i<=n+1; i++){
//         function close(i){
//             setTimeout(function(){
//                 console.log(i)
//             },i*1000)
//         }
//         close(i);
//     }

// }
// sequence(4);

// function outer(b){
//     let a =10;
//     console.log(b)
//     function inner(){
//         console.log(a,b)
//     }
//     return inner
// }
// let a =19;
// outer("hello")();

// Data hiding using closures

// function counter(){
//     var count = 0
//     function increment(){
//         count++;
//         console.log(count)
//     }
//     function decrement(){
//         count--;
//         console.log(count)
//     }
//     return {increment, decrement}
// }
// function Counter(){
//     var count = 0
//     this.increment = function(){
//         count++;
//         console.log(count)
//     }
//     this.decrement = function(){
//         count++;
//         console.log(count)
//     }
// }
// // console.log(count++)
// var cnt = counter();
// cnt.increment();cnt.decrement();

// var constcnt = new Counter();
// constcnt.increment();
// constcnt.increment();
// constcnt.increment();
// constcnt.decrement();

// Callback function

// setTimeout( function(){
//     console.log("timer")
// },6000)

// function x(y){
//     console.log("x");
//     y()
// }

// x(function(){
//     console.log("y")
// })

// Event listeners
// function counter(){        
//     let count=0;
//     document.getElementById("click").addEventListener("click",function handleclick() {
//             console.log("You have clicked me and tricked me: ", ++count)
//     }
// )}
// counter()
// Event loop

// console.log("start")
// setTimeout(function cb(){
//     console.log("Callback Queue")
// }, 4000)

// setTimeout(function cb2(){
//     console.log("Callback queue 2")
// },3000)

// setTimeout(function cb3(){
//     console.log("Callback queue 3")
// },2000)

// setTimeout(function cb4(){
//     console.log("Callback queue 4")
// },1000)
// setTimeout(function cb5(){
//     console.log("Callback queue 5")
// },0)
// console.log("end")
// function syncTask() {
//     console.log('Starting synchronous task');
    
//     // Simulate a long-running task
//     for (let i = 0; i < 1000000000; i++) {}
    
//     console.log('Synchronous task completed');
//   }
  
//   function asyncTask() {
//     console.log('Starting asynchronous task');
    
//     setTimeout(function() {
//       console.log('Asynchronous task completed');
//     }, 1000);
//   }
  
//   syncTask();
//   asyncTask();
//   console.log('Main thread free now');
  
// console.log("Start")
// setTimeout(function(){
//     console.log("Callback")
// },5000)

// console.log("End")
// startTime = new Date().getTime();
// endTime = startTime

// while(endTime<=startTime+10000) {
//     endTime = new Date().getTime();
// }
// console.log("while expires")

// Higher order function and callback
// Calculate area,circumference, diameter of a circle
// const area = function(r){
//     return Math.PI*r*r
// }

// const circumference = function(r){
//     return 2*Math.PI*r
// }

// const diameter = function(r) {
//     return 2*r
// }
// Array.prototype.calculate = function(logic){
//     output = [];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]))
//     }
//     return output
// }

// arr = [3,2,4,5]
// console.log("Using map", arr.map(area))
// console.log("Using Custom map",arr.calculate(area));

// Map


// const arr = [2,5,4,6,7,8]

// function double(x){
//     return x*2;
// }
// function triple(x){
//     return x*3;
// }

// function binary(x){
//     return x.toString(2)
// }
// const doubleoutput = arr.map(double);
// const tripleoutput = arr.map(triple)
// const binaryoutput = arr.map(binary)
// const test = arr.map((ar) => {
//     return 2*ar
// })

// console.log("Double: ", doubleoutput)
// console.log("Triple: ", tripleoutput)
// console.log("Binary: ", binaryoutput)
// console.log("Test: ", test)

// Filter


// const arr = [1,2,3,4,5,6]

// function isOdd(x){
//     return x%2;
// }
// const oddValues = arr.filter(isOdd)
// console.log(oddValues)

// Reduce
// sum 
// const arr = [1,2,3,40,4,5,6]

// // Traditional approach

// function findsum(arr){
//     sum = 0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(findsum(arr))

// // Reduce approach        
// const reduceOutput = arr.reduce(function (acc, curr) {
//             acc=acc+curr
//             return acc;
// },9)
// console.log("reduce output: ", reduceOutput)

// maximum

// const maxOutput = arr.reduce(function(acc,curr){
//     acc = acc>curr ?acc:curr
//     return acc
// },arr[0])

// console.log("Maximum: ", maxOutput)

// tricky map and reducereal world example
// const users =[
//     {firstname: "Harshitha",lastname: "Shekar",age:"25"},
//     {firstname: "Arpith",lastname: "Shekar",age:"31"},
//     {firstname: "Amogh",lastname: "Shekar",age:"21"},
//     {firstname: "Anitha",lastname: "Shekar",age:"52"},
//     {firstname: "Chandra",lastname: "Shekar",age:"57"},
//     {firstname: "Abhishek",lastname: "Patil",age:"25"},
// ]

// const filter = users.filter((user) => user.age < 30).map((x) => x.firstname)
// console.log(filter)

// const reduce = users.reduce(function(acc,curr){
//     if(curr.age<30){
//         acc.push(curr.firstname)
//     }
//     return acc
// }, [])
// console.log("Reduce", reduce)

// // list of full names
// // [Harshitha shekar, arpitha shekar,...]
// function getFullname(user){
//     return `${user.firstname} ${user.lastname}`
// }
// const listOutput = users.map(getFullname)
// const listArrowOutput = users.map((user) => {
//     return `${user.firstname} ${user.lastname}`
// })
// console.log("List Output", listOutput, "List arrow output:", listArrowOutput)

// // { 26: 2, 31:1, ...}

// const categoryReduce = users.reduce(function(acc,curr){
//     if(acc[curr.age]){
//         acc[curr.age]=acc[curr.age]+1
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc
// }, {})

// console.log("Reduce", categoryReduce)

// Transform array of objects into object
// output = {
//     name: ['a','b','c'],
//     value: [1,2,3]
// }

// initial = [
//     {name: 'a', age:'1'},
//     {name: 'b', age:'2'}
// ]
// const transformedReduced = initial.reduce(function(acc,curr){
//     if(!acc.name){
//         acc.name = []
//     }
//     if(!acc.age){
//         acc.age = []
//     }

//     acc.name.push(curr.name)
//     acc.age.push(curr.age)

//     return acc
// }, {})
// console.log(transformedReduced)

// How can I transform an object like 
// `{name: ['a', 'b'], age: ['1', '2']}` 
// into an array of objects like 
// `[{name: 'a', age: '1'}, {name: 'b', age: '2'}]?`
// const initialObject = {name: ['a', 'b'], age: ['1', '2']}
// const transformMap = initialObject.name.map((name,index) => ({
//     name: name,
//     age: initialObject.age[index]
// }))
// console.log(transformMap)

// const transformReduce = initialObject.name.reduce(function(acc,curr, index){
//     acc.push({
//         name: curr,
//         age: initialObject.age[index]
//     })
//     return acc
// }, [])

// console.log(transformReduce)

//  PROMISES

// const github = "https://api.github.com/users/HARSHITHA-SC23" //"http://echo.jsontest.com/title/ipsum/content/blah" //

// const user = fetch(github)
// .then(function(response) {
//     console.log("Resolved1:",response)
//     return response.json()
// }).then(function(data) { 
//     console.log(data)}
// )

// Creating a promise

// cart = ["Tops","Tshirts","Jeans"]

// createOrder(cart)
// .then(function(orderId) {
//     console.log(orderId);
//     return orderId
// })
// .then(function(orderId){
//     return proccedToPayment(orderId) 
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo)
// })
// .catch(function(err){
//     console.log(err.message)
// });


// // Creat

// function createOrder(cart) {
//     pr = new Promise(function(resolve, reject){
//         // validatecart
//         if(cart.length <= 0){
//             err = new Error("Cart is empty")
//             reject(err)
//         }

//         // return orderid
//         orderId = 1234
//         if(orderId){
//             resolve(orderId);
//         }
//     })
//     return pr
// }

// function proccedToPayment(orderId){
//     pr = new Promise(function(resolve,reject){
//         paymentSuccess = false
//         paymentId = 123456
//         if(paymentSuccess){
//             resolve(paymentId)
//         }else {
//             err = new Error("Invalid card number")
//             reject(err)
//         }
//     })

//     return pr
// }

// Async Await

// const p = () => {
//     return new Promise((resolve)=> {resolve({name:1,age:3})})
// } 
// const p2 = (val) =>{
//     return new Promise((resolve)=> {resolve({name:val.name,age:val.age+30})})
// }
// async function getData(){
//     const val = await p();
//     const val2 = await p2(val);
//     console.log(val, val2)
// }
// getData();

// const github = "https://api.github.com/users/HARSHITHA-SC23"

// async function getGitHubData(){
//     try{
//         const value = await fetch(github)
//         const json = await value.json()
//         console.log(json)
//     } catch(err){
//         console.log(err)
//     }
// }

// getGitHubData()

//  Promise APIs

const p1 = new Promise((resolve,reject) => {
    setTimeout(function(){
        return resolve("P1successfull")
    },1000)
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(function() {
        return reject("P2 rejected")
    },1000)
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(function() {
        return resolve("P3 successfull")
    },2000)
})

// function resolvePromies(){
//     p1.then((res) => console.log(res)).catch((err) => console.log(err))
// }

// resolvePromies();
Promise.any([p1,p2,p3]).then((res) => console.log(res))