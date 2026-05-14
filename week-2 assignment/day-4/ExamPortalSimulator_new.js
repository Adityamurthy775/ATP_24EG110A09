// Asynchronous operations example with setTimeout
// Uncomment below to learn about setInterval:
//setInterval(() => {
//    console.log("hi")
//}, 9000);

// Display exam submission confirmation
console.log("Exam submitted successfully")

// After 2 seconds, display evaluation message
setTimeout(()=>{
    console.log("Evaluating answers…")
},2000)

// After 4 seconds, display final result
setTimeout(()=>{
    console.log("Result: Pass")
},4000)
