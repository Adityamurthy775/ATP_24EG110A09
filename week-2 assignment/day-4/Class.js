class student{
    #sno;// # private variable
    name;
    email
    constructor(sno,name,email){
        this.email=email
        this.name=name
        this.#sno=sno
    }
    getstudentdetails(){
        return this.name
    }
}
//let result=new student(123,"adi","adi@gamil.com")
//console.log(result.getstudentdetails())

/*
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books

      */
let count=0;
class library{
    title
    author
    pages
    isAvailable
    constructor(title,author,pages,isAvailable){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable

    }
    borrow(title){
        this.isAvailable=false
    }
    returnbook(title){
        this.isAvailable=true

    }
    getdetails(){
        return `The ${this.title} by ${this.author} (${this.pages} ${this.isAvailable}) `
    }
    islong(){
        if(this.pages> 300){
            return true
        }
        else{
            return false
        }
    }

}
let result=new library("python","adi",30,true)
let result1=new library("harry poter","byme",700,false)
arr=[result,result1]
console.log(result.getdetails())
console.log(result.getdetails())
result.borrow("python")
result1.borrow("harry potter")
result.returnbook("python")
for (let v of arr){
    if(v.isAvailable===true){
        console.log(v.getdetails())
    }
    if(v.islong()===true){
        count++
    }
}
console.log(count)
