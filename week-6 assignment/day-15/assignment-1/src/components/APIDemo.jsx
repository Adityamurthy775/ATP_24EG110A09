import { useState, useEffect } from "react";
function APIDemo() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let userlist = await data.json();
        setUser(userlist);
      } catch (err) {
        console.log("error is ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  console.log("api rendered");

if (loading) {
    return <p className="text-center">Loading...</p>;
  }

if (error != null) {
  return <p className="text-center text-red-700 text-5xl">Error: {error.message}</p>
}

  return (
    <div>
      <h1 className="text-center">USERLIST</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {user.map((userobj) => (
          <div className="border-2 p-4" key={userobj.id}>
            <p className="font-bold">Title: {userobj.title}</p>
            <p>Body: {userobj.body}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default APIDemo;