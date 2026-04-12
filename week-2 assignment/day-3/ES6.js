/*
ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
    */
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let instocks=cart.filter(cartobj=> cartobj.inStock===true)
let newcart=cart.map(cartobj=>{
    return cartobj.name,cartobj.price*cartobj.quantity
})
let grandtotal=cart.reduce((acc,cartobj)=> acc+cartobj.price,0)
let detailsofmouse=cart.find(cartobj=> cartobj.name='mouse')
let indexofkeyboard=cart.findIndex(cartobj=> cartobj.name==='Keyboard')
console.log(instocks)
console.log(newcart)
console.log(grandtotal)
console.log(detailsofmouse)
console.log(indexofkeyboard)
/*
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
stud_grt_40=students.filter(studobj=>studobj.marks>=40)
grade=students.map(studobj=>{
    if(studobj.marks>=90){
        return 'A'
    }
    else if(studobj.marks>=75){
        return 'B'
    }
    else if(studobj.marks>=60){
        return 'C'
    }
    else{
        return 'D'
    }
})
let avg_marks=students.reduce((acc,studobj)=> acc+studobj.marks,0)
let stud_with_92=students.find(studobj=>studobj.marks===92)
let index_of_kiran=students.findIndex(studobj=> studobj.name=='Kiran')
console.log(stud_grt_40)
console.log(grade)
console.log(avg_marks/students.length)
console.log(stud_with_92)
console.log(index_of_kiran)

/*
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
let emp_dept_it=employees.filter(empobj=>empobj.department=='IT')
let updated_salary=employees.map(empobj=>empobj.salary*1.10)
let total_payout=employees.reduce((acc,empobj)=>acc+empobj.salary,0)
let emp_with_30k=employees.find(empobj=>empobj.salary==30000)
let index_neha=employees.findIndex(empobj=>empobj.name==='Neha')
console.log(emp_dept_it)
console.log(updated_salary)
console.log(total_payout)
console.log(emp_with_30k)
console.log(index_neha)

/*
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
let sifimovie=movies.filter(movobj=> movobj.genre==='Sci-Fi')
let avg_rating=movies.reduce((acc,movobj)=>acc+movobj.rating,0)
let joker=movies.find(movobj=> movobj.title==='Joker')
let avengers=movies.findIndex(movobj=>movobj.title==='Avengers')
console.log(sifimovie)
console.log(avg_rating/movies.length)
console.log(joker)
console.log(avengers)
/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
    */
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
let credit=transactions.filter(tranobj=>tranobj.type==='credit')
let amount=transactions.map(tranobj=>tranobj.amount)
let balance=transactions.reduce((acc,tranobj)=>
{
    if(tranobj.type==='credit'){
        acc=acc+tranobj.amount
    }
    else{
        acc=acc-tranobj.amount
    }
    return acc
},0)
let firstdebit=transactions.find(tranobj=>tranobj.type==='debit')
let indexof10k=transactions.findIndex(tranobj=> tranobj.amount===10000)
console.log(credit)
console.log(amount)
console.log(balance)
console.log(firstdebit)
console.log(indexof10k)
