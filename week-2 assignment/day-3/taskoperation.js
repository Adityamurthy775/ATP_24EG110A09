// Array to store all tasks
let tasks=[]

// Import validation functions for task properties
import {validationtitle,validatePriority,validateDueDate} from './validator.js'

// Function to create a new task with validation
let newtask=function(id,task,pri,date,stu){
    // Validate task title, priority, and due date
    if (validationtitle(task.length) && validatePriority(pri) && validateDueDate(date)){
        // If all validations pass, create task object
        let info={
            id:id,
            title:task,
            priority:pri,
            date:date,
            status:stu
        }
        // Add task to tasks array
        tasks.push(info)
        return "success"
    }
    else
        {
        // If validation fails, return error
        return "error"
    }
}

// Function to display all tasks
let display=function(){
    return tasks
}

// Function to mark a task as completed by id
let completeTask=function(id){
    // Iterate through tasks array
    tasks.map(tskobj=>{
        // If task id matches, update status to completed
        if(tskobj.id===id){
            tskobj.status='completed'
        }
    })
}

// Test: Create new task with id=1
console.log(newtask(1,"adi",'low','12-01-2025',"completed"))

// Test: Create new task with id=2
console.log(newtask(2,"adi",'high','01-12-2025',"not completed"))

// Test: Create new task with id=3
console.log(newtask(3,"sdf",'edef','01-12-2025','not completed'))

// Mark task with id=3 as completed
completeTask(3)

// Display all tasks array
console.log(tasks)

// Display all tasks using display function
console.log(display())

// Export functions for use in other modules
export {newtask,display,completeTask}
