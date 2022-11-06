import React, {useState} from 'react'
import { FaSistrix } from 'react-icons/fa'

function Search({country, setCountry, UrlAll}) {

  //https://restcountries.com/v3.1/name/{name} get by name

  const [name, setName] = useState([]);

  const getName = async () => {
    const response = await fetch('https://restcountries.com/v3.1/name/' + name);
    const data = await response.json();
    console.log(data);
    setCountry(data);
    console.log("data in search or data 2")
    // let url = 'https://restcountries.com/v3.1/name/' + name;
    // UrlAll = url;
  }

  function handleSubmit (e) {
    e.preventDefault()
    getName()
    console.log("submit in search")
  }

  return (
    <div className='px-12 py-10 flex justify-between'>
        <form onSubmit={handleSubmit}>
          <div className='flex shadow-lg text-center h-[3rem] w-[15rem] border-b-2 border-gray-200 items-center px-2' ><FaSistrix className='text-center' /><input placeholder='Search country name' className='focus:outline-none ml-2' onChange={(e) => setName(e.target.value)}  value={name} type="text"/></div>
          <button type='submit'></button>
        </form>
    
        <div className='hidden'>
            Filter by Region
        </div>
    </div>
  )
}

export default Search