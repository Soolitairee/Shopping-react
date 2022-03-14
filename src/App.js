import { useEffect } from 'react';
import './App.css';
import Fairy from './companents/Fairy';
import Home from './companents/Home';
import Alet from './companents/Alet';
import Basket from './companents/Basket';
import Register from './companents/Register';
import Ariel from './companents/Ariel';
import Product from './companents/Product';
import Wishlist from './companents/Wishlist';
import Login from './companents/Login';
import Sabun from './companents/Sabun';
import Ace from './companents/Ace';
import {Routes,Route} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import axios from 'axios';
import Header from './companents/Header';
function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    axios.get("http://localhost:3004/ucuz")
    .then(res => res.data)
    .then(res => dispatch({type:"ADD_UCUZ",payload:res}))

    axios.get("http://localhost:3004/ariel")
    .then(res => res.data)
    .then(res => dispatch({type:"ADD_ARIEL",payload:res}))

    axios.get("http://localhost:3004/sabun")
    .then(res => res.data)
    .then(res => dispatch({type:"ADD_SABUN",payload:res}))

    axios.get("http://localhost:3004/satilan")
    .then(res => res.data)
    .then(res => dispatch({type:"ADD_SATILAN",payload:res}))

  axios.get("http://localhost:3004/alet")
  .then(res => res.data)
  .then(res => {
    
    dispatch({type:"ADD_ALET",payload:res})
    dispatch({type:"REPAIR_TOOLS",payload:res})
  })

  axios.get("http://localhost:3004/ace")
    .then(res => res.data)
    .then(res => dispatch({type:"ADD_ACE",payload:res}))

    axios.get("http://localhost:3004/fairy")
    .then(res => res.data)
    .then(res => dispatch({type:"ADD_FAIRY",payload:res}))
 }, [])


  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Register' element={<Register/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Wishlist' element={<Wishlist/>}/>
       <Route path='/sabunlarUni' element={<Sabun/>}/>
       <Route path='/Ariel' element={<Ariel/>}/>
       <Route path='/aletler' element={<Alet/>}/>
       <Route path='/Basket' element={<Basket/>}/>
       <Route path='/Fairy' element={<Fairy/>}/>
       <Route path='/Product/:id' element={<Product/>}/>
       <Route path='/Ace' element={<Ace/>}/>
     
     </Routes>
     
    </div>
  );
}

export default App;
