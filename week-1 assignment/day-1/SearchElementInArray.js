// Function to search for an element in an array
let arr=function (a,n)
{
    // Initialize flag to track if element is found
    flag=0

// Iterate through the array
for (let i=0;i<a.length;i++){
    // If element matches the search value, return its index
    if(a[i]==n){
        return i;
        flag=1
        break
    }
}

// If element not found, return "not found" message
if (flag==0){
    return "not found";
}
}

// Call function to search for element 0 in array [1,2,3,4,5]
let result=arr([1,2,3,4,5],0)

// Print the result (index or "not found")
console.log(result)
