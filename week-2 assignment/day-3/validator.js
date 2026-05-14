// Function to validate task title length
let validationtitle=function(title){
    // Check if title is empty
    if(!title){
        return "title is requried"
    }
    // Check if title has more than 3 characters
    if(title.length<=3){
        return "title is not valid"
    }
    // Title is valid
    else{
        return "title is valid"
    }
}

// Function to validate task priority
let validatePriority=function(pri){
    // Check if priority is one of the valid values: low, medium, or high
    if( pri==='low'|| pri==='medium'|| pri=='high'){
        return true
    }
    // Priority is not valid
    else{
        return false
    }
}

// Function to validate due date
let validateDueDate=function(date){
    // Simple validation - always returns true for now
    return true
}

// Export validation functions for use in other modules
export {validationtitle,validatePriority,validateDueDate}
