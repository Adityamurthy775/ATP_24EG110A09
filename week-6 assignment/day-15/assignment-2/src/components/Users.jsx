import { useState, useEffect } from "react";
import UsersCount from "./UsersCount";
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const [count, setCount] = useState(0);
const updateCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let userlist = await data.json();
        setUsers(userlist);
      } catch (err) {
        console.log("error is ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error != null) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="bg-amber-100 ">
      <h1 className="text-center text-2xl font-bold mb-4">USERS LIST</h1>
      <UsersCount count={count}/>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((userobj) => (
          <div key={userobj.id} className="border-2 p-6">
            <p className="font-semibold text-center">Name: {userobj.name}</p>
            <p className="text-center">Username: {userobj.username}</p>
            <p className="text-center">Email: {userobj.email}</p>
            <p className="text-center">Street: {userobj.address.street}</p>
            <p className="text-center pb-2">City: {userobj.address.city}</p>
            <button className="block mx-auto bg-blue-400 rounded" onClick={updateCount}>ADD USERS</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;