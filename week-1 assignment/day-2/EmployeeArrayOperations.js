// Array of employee objects with id, name, and marks
const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

// Display original employee data
console.log("before")
console.log(employees)

/*
Tasks to perform:
1. Insert new Employee at 2nd position
2. Remove an employee with name "Kiran"
3. Change the last mark 95 to 75 of employee "Sneha"
*/

// Create a new employee object
new_emp={
    eno:109,
    name:"abi",
    marks:[10,20,30]
}

// Insert new employee at index 2 (2nd position)
employees.splice(2,0,new_emp)

// Loop through employees to find and remove "Kiran"
for(let i in employees){
    if(employees[i].name=='Kiran'){
        // Remove the employee at index i
        employees.splice(i,1)
    }
}

// Loop through employees to find "Sneha" and update her last mark
for(let v in employees){
    if(employees[v].name=='Sneha'){
        // Replace the last mark (95) with 75
        employees[v].marks.splice(2,1,75)
    }
}

// Display modified employee data
console.log("after")
console.log(employees)
