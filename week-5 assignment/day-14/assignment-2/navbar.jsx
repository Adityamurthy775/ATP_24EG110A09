function Navbar(){
    return(
        <div className="m-2 border-2 flex justify-between bg-gray-400">
        <h1 className="font-semibold ml-4">Logo</h1>
        <ul className="flex gap-25">
            <li>Home</li>
            <li>Signup</li>
            <li>Login</li>
        </ul>
        </div>
    )
}
export default Navbar