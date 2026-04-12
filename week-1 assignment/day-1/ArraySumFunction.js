function arraySum(a)
{
let sum=0
for (let i=0;i<a.length;i++){
    sum=sum+a[i]
}
return sum
}
let result=arraySum([1,2,3,4,5,6])
console.log(result)
