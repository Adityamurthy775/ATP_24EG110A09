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



console.log("before")
console.log(employees)
/*Insert new Emp at 2nd position
Remove an emp with name "Kiran"
Change the last mark 95 to 75 of emp  "Sneha"
*/
new_emp={
    eno:109,
    name:"abi",
    marks:[10,20,30]
}
employees.splice(2,0,new_emp)
for(let i in employees){
    if(employees[i].name=='Kiran'){
        employees.splice(i,1)
    }
}
for(let v in employees){
    if(employees[v].name=='Sneha'){
        employees[v].marks.splice(2,1,75)
    }
}
console.log("after")
console.log(employees)
