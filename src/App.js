import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountry]= useState([])
  const [cart, setCart]= useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=> res.json())
    .then(data=> setCountry(data))
   

  },[])
  const countryDiv={
    display:'flex',
    
  }
  const handleClick =(country)=>{
    console.log('clcick',country)
    const newCart = [...cart,country]
    setCart(newCart)
  }
  return (
    <div>
      <h1> Country list {countries.length}</h1>
      <h2>Country added {cart.length}</h2>
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country 
          country={country}
          handleClick={handleClick}
        
        ></Country>)
      }
      
    </div>
  );
}

export default App;
