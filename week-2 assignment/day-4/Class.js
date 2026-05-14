// Define student class with private sno (serial number) property
class student{
    #sno;// # private variable - encapsulation
    name;
    email

    // Constructor to initialize student properties
    constructor(sno,name,email){
        this.email=email
        this.name=name
        this.#sno=sno
    }

    // Method to get student details
    getstudentdetails(){
        return this.name
    }
}
//let result=new student(123,"adi","adi@gamil.com")
//console.log(result.getstudentdetails())

/*
Problem Statement: Library Book Management System
-------------------------------------------------
This program creates a Book class to manage library books
*/

// Counter to track long books
let count=0;

// Class to represent a book in the library
class library{
    title
    author
    pages
    isAvailable

    // Constructor to initialize book properties
    constructor(title,author,pages,isAvailable){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }

    // Method to borrow a book (mark as not available)
    borrow(title){
        this.isAvailable=false
    }

    // Method to return a book (mark as available)
    returnbook(title){
        this.isAvailable=true
    }

    // Method to get book details as a formatted string
    getdetails(){
        return `The ${this.title} by ${this.author} (${this.pages} ${this.isAvailable}) `
    }

    // Method to check if book is long (more than 300 pages)
    islong(){
        if(this.pages> 300){
            return true
        }
        else{
            return false
        }
    }
}

// Create first book object: Python book with 30 pages
let result=new library("python","adi",30,true)

// Create second book object: Harry Potter with 700 pages
let result1=new library("harry poter","byme",700,false)

// Store book objects in array
arr=[result,result1]

// Display details of both books
console.log(result.getdetails())
console.log(result.getdetails())

// Borrow the first book
result.borrow("python")

// Borrow the second book
result1.borrow("harry potter")

// Return the first book
result.returnbook("python")

// Loop through all books
for (let v of arr){
    // Check if book is available and display it
    if(v.isAvailable===true){
        console.log(v.getdetails())
    }
    // Count long books (more than 300 pages)
    if(v.islong()===true){
        count++
    }
}

// Display the count of long books
console.log(count)
