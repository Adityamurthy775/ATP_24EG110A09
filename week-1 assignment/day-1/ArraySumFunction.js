// Function to calculate sum of array elements
function arraySum(a)
{
    // Initialize sum to store total
    let sum=0

    // Loop through each element in the array
    for (let i=0;i<a.length;i++){
        // Add current element to sum
        sum=sum+a[i]
    }

    // Return the total sum
    return sum
}

// Call function with array [1,2,3,4,5,6]
let result=arraySum([1,2,3,4,5,6])

// Print the result
console.log(result)
