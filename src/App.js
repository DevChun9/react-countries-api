import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import All from './components/All'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Country from './components/Country'

function App() {

  const [country, setCountry] = useState([]);
  const [style, setStyle] = useState(false);
  const [name, setName] = useState("tha");

    let UrlAll = 'https://restcountries.com/v3.1/all';

    const fetchAll = async () => {
      const response = await fetch(UrlAll);
      const data = await response.json();
      setCountry(data);
      console.log(data);
      console.log("data one")
    }
  
    useEffect(()=> {
      fetchAll();
      console.log("useEffect one")
    }, []);

  return (
    <div>
      <Router>
        <Header setStyle={setStyle} style={style}/>
        <Routes>
            <Route path="/" element={<><Search style={style} country={country} setCountry={setCountry} UrlAll={UrlAll}/> <All name={name} style={style} country={country}/></>} />
            <Route path="/country/:name" element={<Country name={name} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App