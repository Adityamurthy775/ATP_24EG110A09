// Initialize array with numbers
let a=[10,20,30,9]

// Set min to the first element of array
let min=a[0]

// Loop through each element to find the minimum value
for(let i=0;i<a.length;i++){
    // If current element is smaller than min, update min
    if(a[i]<min){
        min=a[i]
    }
}

// Print the smallest number found
console.log(min)
