/*
ASSIGNMENT 1: Shopping Cart Summary
This program demonstrates the use of array methods: filter(), map(), reduce(), find(), and findIndex()
*/

// Shopping cart data with products
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Task 1: Filter products that are in stock
let instocks=cart.filter(cartobj=> cartobj.inStock===true)

// Task 2: Map to create array with product name and total price
let newcart=cart.map(cartobj=>{
    return cartobj.name,cartobj.price*cartobj.quantity
})

// Task 3: Reduce to calculate grand total of cart
let grandtotal=cart.reduce((acc,cartobj)=> acc+cartobj.price,0)

// Task 4: Find product details of "Mouse"
let detailsofmouse=cart.find(cartobj=> cartobj.name='mouse')

// Task 5: Find index position of "Keyboard"
let indexofkeyboard=cart.findIndex(cartobj=> cartobj.name==='Keyboard')

// Print all results
console.log(instocks)
console.log(newcart)
console.log(grandtotal)
console.log(detailsofmouse)
console.log(indexofkeyboard)

/*
ASSIGNMENT 2: Student Performance Dashboard
Analyzing student marks and assigning grades based on performance
*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Task 1: Filter students who passed (marks >= 40)
stud_grt_40=students.filter(studobj=>studobj.marks>=40)

// Task 2: Map students to assign grades based on marks
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

// Task 3: Reduce to calculate average marks of all students
let avg_marks=students.reduce((acc,studobj)=> acc+studobj.marks,0)

// Task 4: Find student who scored 92 marks
let stud_with_92=students.find(studobj=>studobj.marks===92)

// Task 5: Find index of student "Kiran"
let index_of_kiran=students.findIndex(studobj=> studobj.name=='Kiran')

// Print all results
console.log(stud_grt_40)
console.log(grade)
console.log(avg_marks/students.length)
console.log(stud_with_92)
console.log(index_of_kiran)

/*
ASSIGNMENT 3: Employee Payroll Processor
Processing employee salary information with bonus calculations
*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Task 1: Filter employees from IT department
let emp_dept_it=employees.filter(empobj=>empobj.department=='IT')

// Task 2: Map to calculate net salary with 10% bonus
let updated_salary=employees.map(empobj=>empobj.salary*1.10)

// Task 3: Reduce to calculate total salary payout for all employees
let total_payout=employees.reduce((acc,empobj)=>acc+empobj.salary,0)

// Task 4: Find employee with salary 30000
let emp_with_30k=employees.find(empobj=>empobj.salary==30000)

// Task 5: Find index of employee "Neha"
let index_neha=employees.findIndex(empobj=>empobj.name==='Neha')

// Print all results
console.log(emp_dept_it)
console.log(updated_salary)
console.log(total_payout)
console.log(emp_with_30k)
console.log(index_neha)

/*
ASSIGNMENT 4: Movie Streaming Platform
Movie recommendation system that filters and analyzes movies
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Task 1: Filter only "Sci-Fi" movies
let sifimovie=movies.filter(movobj=> movobj.genre==='Sci-Fi')

// Task 2: Map to format movie title with rating
// Task 3: Reduce to find average movie rating
let avg_rating=movies.reduce((acc,movobj)=>acc+movobj.rating,0)

// Task 4: Find movie "Joker"
let joker=movies.find(movobj=> movobj.title==='Joker')

// Task 5: Find index of "Avengers"
let avengers=movies.findIndex(movobj=>movobj.title==='Avengers')

// Print all results
console.log(sifimovie)
console.log(avg_rating/movies.length)
console.log(joker)
console.log(avengers)

/*
ASSIGNMENT 5: Bank Transaction Analyzer
Analyzing bank transactions and calculating account balance
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// Task 1: Filter all credit transactions
let credit=transactions.filter(tranobj=>tranobj.type==='credit')

// Task 2: Map to extract only transaction amounts
let amount=transactions.map(tranobj=>tranobj.amount)

// Task 3: Reduce to calculate final account balance (credit - debit)
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

// Task 4: Find the first debit transaction
let firstdebit=transactions.find(tranobj=>tranobj.type==='debit')

// Task 5: Find index of transaction with amount 10000
let indexof10k=transactions.findIndex(tranobj=> tranobj.amount===10000)

// Print all results
console.log(credit)
console.log(amount)
console.log(balance)
console.log(firstdebit)
console.log(indexof10k)
