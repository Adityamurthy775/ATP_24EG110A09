/*
Deep Copy Example using structuredClone()
This demonstrates creating a complete independent copy of a nested object
where changes to the copy don't affect the original
*/

const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

// Task:
// 1. Create a deep copy of order using structuredClone()
// 2. Modify properties in the copied object:
//    i. customer.address.city - change to different city
//    ii. items[0].price - change the product price
// 3. Verify original object remains completely unchanged

// Create a deep copy of the order object
// structuredClone() creates a completely independent copy of all nested objects
let neworder=structuredClone(order)

// Modify the city in the deep copy
neworder.customer.address.city="chennai"

// Modify the price in the deep copy
neworder.items[0].price=80000

// Print original order - should remain unchanged
console.log(order)

// Print modified order copy - shows the changes
console.log(neworder)
