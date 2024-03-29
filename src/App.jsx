import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Tienda from './components/Tienda/Tienda'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Home from './components/Home/Home'
import { CartProvider } from './components/CartContext/CartContext'
import CheckoutForm from './components/CheckoutForm/CheckoutForm'

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/itemlistcontainer' element={<ItemListContainer/>}></Route>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/tienda' element={<Tienda/>}></Route>
        <Route path='/hero' element={<Hero/>}></Route>
        <Route path='/checkout' element={<CheckoutForm/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App