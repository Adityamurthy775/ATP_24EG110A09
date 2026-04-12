import { useForm } from "react-hook-form"

function FormDemo(){

    const {register,handleSubmit,formState:{errors}}=useForm()//register-to register form fields,to handle submissions,to handle validations
    //form submit function
    const onFormSubmit=(obj)=>{ console.log(obj)}

 return(
    <div>
        <h1 className="text-center text-4xl">Form Demo</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
            {/* username*/}
            <div className="mb-3">
               <label htmlFor="Username">Username</label>
               <input type="text"
               {...register("Username",{
                required:"Username is required",
                validate:(v)=> v.trim().length!=0||"white space is not allowed",
                //minLength:4,
                maxLength:6,
               })}
               id="Username"
               className="border w-full p-3 shadow-2xl"
                />
                {
                  errors.Username?.type==='required' && <p className="text-red-600">{errors.Username.message}</p>
                }
                {
                  errors.Username?.type==='minLength'&& <p className="text-red-600">The min length is 4 char</p>
                }
                {
                  errors.Username?.type==='maxLength' && <p className="text-red-600"> The max lenght is 6 char</p>
                }
                {
                  errors.Username?.type==='validate' && <p className="text-red-600">{errors.Username.message}</p>
                }
            </div>
            {/*email*/}
            <div className="mb-3">
               <label htmlFor="email">email</label>
               <input type="text"
               {...register("email")}
               id="email"
               className="border w-full p-3 shadow-2xl"
                />
            </div>
            {/* submit button*/}
            <button type="submit" className="bg-amber-600 p-5 block mx-auto ">Submit</button>
        </form>
    </div>
 )
}

export default FormDemo