import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { Checkout } from './pages/Checkout';
import NavBar from './components/NavBar';
function App(){
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/home' element= {<Home/>}></Route>
        <Route path='/auth' element= {<Auth/>}></Route>
        <Route path='/checkout' element= {<Checkout/>}></Route>
      </Routes>

    </div>
  )
}

export default App;