//write  A FINCTIOJN THAT RECEVIES ANY NO OF ARG AND RETURN THERE SUM
let sum=function(...a){
     return a.reduce((acc,sum)=> acc+sum)
}
//console.log(sum(10,20,30))

/*
Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
            theme: "dark",
            language: "en"
                }
};
let newuser={...user}
newuser.name="adi"
newuser.preferences.theme="light"
console.log(user)
console.log(newuser)
// in the name has chaned but the theme is chanaged in both of the obj
