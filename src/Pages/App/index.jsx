import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import './App.css'

function App() {

  return (
    <div className="bg-red-100">
      <h1 className="">
        <Home/>
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
        <SingIn/>
      </h1>
    </div>
  )
}

export default App
