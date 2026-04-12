function Product(props){
    const {users}=props
    console.log(users)
    return(
        <div className="border-2 m-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {
                users.map((user)=>(
                    <div key={user.id} className="p-5 text-olive-300 font-semibold  border-2 m-5 bg-black rounded-3xl">
                        <h1 className="pb-2 text-center font-bold font-mono">{user.title}</h1>
                        <h1 className="=pb-2 text-center">{user.price}</h1>
                        <h1 className="pt-2 ">{user.description}</h1>
                        <h1>{user.category}</h1>
                    </div>
                ))
            }
        </div>
    )
}

/*
function Product(props) {
  return (
    <div>
      {props.users.map((user) => (
        <h1 key={user.id}>{user.title}</h1>
      ))}
    </div>
  );
}

*/
export default Product