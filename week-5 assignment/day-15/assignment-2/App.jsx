import './App.css'
import Navbar from './components/navbar.jsx'
import UsersList from './components/userslist.jsx'
import Footer from './components/footer.jsx'
function App(){
  return(
    <div className='m-2 border-2'>
    <Navbar/>
    <UsersList/>
    <Footer/>
    </div>
  )
}
export default App