/*
-----------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/
console.log("OTP Sent Successfully")
let second=10
let id=setInterval(()=>{
    console.log(second--)
    if(second===0){
        console.log("resend otp")
        clearInterval(id)
    }
},1000)

