// Import functions from task operation module
import {newtask,display,completeTask} from './taskoperation.js'

// Create a new task with id=1, title="adi", priority="low", date="12-01-2025", status="completed"
console.log(newtask(1,"adi",'low','12-01-2025',"completed"))

// Create a new task with id=2, title="adi", priority="high", date="01-12-2025", status="not completed"
console.log(newtask(2,"adi",'high','01-12-2025',"not completed"))

// Create a new task with id=3, title="sdf", priority="edef", date="01-12-2025", status="not completed"
console.log(newtask(3,"sdf",'edef','01-12-2025','not completed'))

// Display all created tasks
console.log(display())
