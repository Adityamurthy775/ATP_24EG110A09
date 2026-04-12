import { useState } from "react";

function Counter() {
  const [user, setUser] = useState({ username: "ravi", age: 21, city: "hyd" });
  const [marks, setMarks] = useState([10, 20, 30]);

  const updateUser = () => {
    setUser({ ...user, username: "adi", age: 18 });
  };

  const updateMarks = () => {
    setMarks([...marks, 40]);
  };

  return (
    <div className="text-center p-10 border">
      <p className="text-2xl">Name:{user.username}</p>
      <p className="text-2xl">Age:{user.age}</p>
      <p className="text-2xl">city:{user.city}</p>

      <button className="p-5 bg-amber-700" onClick={updateUser}>Update User</button>
      <h3>Marks:</h3>
      {marks.map((mark) => (
        <p className="text-3xl" childrenkey={mark}>{mark}</p>
      ))}
      <button className="p-5 bg-amber-700" onClick={updateMarks}>Add Marks</button>
    </div>
  );
}

export default Counter;