import UsersList from "./userslist.jsx";

function Users({ userobj }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-cyan-400 m-5">
      {userobj.map((user, index) => (
        <div key={index} className="bg-emerald-400 shadow-2xl rounded-4xl p-4 flex flex-col items-center">
          <img
            src={user.image}
            alt={`Profile picture of ${user.name}`}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-2xl">
            Profile
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;