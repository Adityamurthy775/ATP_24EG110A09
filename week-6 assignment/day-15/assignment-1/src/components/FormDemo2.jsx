import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function FormDemo() {
  const [users, setUsers] = useState([])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onFormSubmit = (data) => {
    setUsers([...users, data])
    reset()
  }

  return (
    <div className="bg-orange-100 min-h-screen p-5">
      <h1 className="text-4xl text-center">Create User Form</h1>

      {/* FORM */}
      <form
        className="max-w-md mx-auto mt-10 bg-green-300 p-5"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        {/* Username */}
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            {...register('Username', {
              required: 'Username required',
              validate: (v) =>
                v.trim().length !== 0 || 'White space is not valid',
              minLength: {
                value: 4,
                message: 'Min length is 4'
              },
              maxLength: {
                value: 10,
                message: 'Max length is 10'
              }
            })}
            className="border w-full p-2"
          />

          {errors.Username && (
            <p className="text-red-500">{errors.Username.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email required'
            })}
            className="border w-full p-2"
          />

          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            {...register('dateOfBirth', {
              required: 'Date of Birth required'
            })}
            className="border w-full p-2"
          />

          {errors.dateOfBirth && (
            <p className="text-red-500">{errors.dateOfBirth.message}</p>
          )}
        </div>

        <button className="bg-green-950 p-2  block mx-auto text-white ">Submit</button>
      </form>
      <h1 className="text-3xl text-center mt-6">Users List</h1>

      <div className="max-w-md mx-auto mt-5 bg-red-200 p-4">
        <div className="flex justify-between font-bold  pb-2">
          <h1>Name</h1>
          <h1>Email</h1>
          <h1>DOB</h1>
        </div>

        {users.map((user, index) => (
          <div
            key={index}
            className="flex justify-between mt-2 border-b pb-1"
          >
            <h1>{user.Username}</h1>
            <h1>{user.email}</h1>
            <h1>{user.dateOfBirth}</h1>
          </div>
        ))}
        </div>
      </div>
  )
}