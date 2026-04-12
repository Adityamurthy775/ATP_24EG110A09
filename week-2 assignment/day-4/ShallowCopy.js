//spread operator
let orgobj={a:10} 
let copyobj={...orgobj}
//copyobj.a=101
//console.log(orgobj)
//console.log(copyobj)
let p={
    name:"adi",
    id:9,
    addess:{
        city:"hyd"
    }
}

/*
Exercise 1: Copy & Extend an Array

                        Goal: Learn array copying with spread
                        
                        You are given:
                                let fruits = ["apple", "banana"];
                        
                        
                        Tasks
                              -> Create a new array moreFruits
                              
                              -> Copy all fruits from fruits
                              
                              -> Add "orange" at the end using spread
                              
                              -> Print both arrays
                        
                        
                        ✅ Expected Output
                              ["apple", "banana"]
                              ["apple", "banana", "orange"]
                        
                        👉 Original array should NOT change.

                        */
let fruits = ["apple", "banana"];
let moreFruits=[...fruits,"orange"]
console.log(fruits)
console.log(moreFruits)
