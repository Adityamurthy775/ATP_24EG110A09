import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function ListOfEmps() {
  const [emps, setEmps] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const goToEmployee = (empObj) => {
    navigate('/employee', { state: empObj })
  }

  const goTOEditEmployee = (empObj) => {
    navigate('/edit-employee', { state: empObj })
  }

  const deleteEmployeeById = async (empObj) => {
    try {
      setLoading(true)
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/employee-api/employees/${empObj._id}`
      )
      if (res.status === 200) {
        getEmps() // ✅ refresh list after delete
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message)
    } finally {
      setLoading(false)
    }
  }

  async function getEmps() {
    try {
      setLoading(true)
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/employee-api/employees` // ✅ using env
      )
      if (res.status === 200) {
        setEmps(res.data.payload)
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getEmps()
  }, [])

  if (loading) {
    return <p className="text-center text-3xl">Loading...</p>
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>
  }

  return (
    <div>
      <h1 className="text-4xl text-center mb-4">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-linear-to- from-gray-100 via-gray-200 to-gray-300 p-4 border shadow-2xl rounded-2xl text-2xl text-center font-bold"
          >
            <p>{empObj.name}</p>
            <p className="mb-3">{empObj.email}</p>
            <div className="flex justify-around font-medium text-xl">
              <button
                className="bg-green-600 text-white p-2 rounded-2xl"
                onClick={() => goToEmployee(empObj)}
              >
                View
              </button>
              <button
                className="bg-yellow-600 text-white p-2 rounded-2xl"
                onClick={() => goTOEditEmployee(empObj)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white p-2 rounded-2xl"
                onClick={() => deleteEmployeeById(empObj)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListOfEmps
