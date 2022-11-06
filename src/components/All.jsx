import React from 'react'
import {Link} from 'react-router-dom'

function All(country, name) {

  let countries = country.country;

  return (
    <div className='px-12'>
      {/* {console.log(countries)} */}
      <div className='grid grid-cols-1 md:grid md:grid-cols-3 lg:grid-cols-4 justify-between'>
        {countries.map((get, key)=> (
        <Link to={`/country/${get.name.common}`}>
          <div data-aos="fade-up" className='mb-12 hover:scale-105 duration-200 w-full md:w-52 shadow-lg rounded-sm' key={key}>
            <img className='h-full md:h-28 w-full' alt={get.name.common} src={get.flags.png}/>
            <div className='p-6'>
              <h1 className='text- font-bold'>{get.name.common}</h1>
              <h3 className=''>Population {get.population}</h3>
              <h3 className=''>Region {get.region}</h3>
              <h3 className=''>Capital {get.capital}</h3>
            </div>
          </div>
        </Link>
        ))}
      </div>
    </div>
  )
}

export default All