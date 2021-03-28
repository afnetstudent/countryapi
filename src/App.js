import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountry]= useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=> res.json())
    .then(data=> setCountry(data))
   

  },[])
  return (
    <div>
      <h1> Country list {countries.length}</h1>
      <ul>
      {
        countries.map(country => <Country country={country}></Country>)
      }
      </ul>
    </div>
  );
}

export default App;
