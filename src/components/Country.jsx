import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

function Country() {

    const [detail, setDetail] = useState([]);
    const {name} = useParams()

    console.log("this is detail" ,name);

    const getDetail = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await response.json();
        setDetail(data)
        console.log(detail);
    }

    console.log("this is data", detail)

    useEffect(() => {
        getDetail();
        console.log("Detail fetched");
    }, [])

  return (
    <>
        <div className='p-12 '>
            <Link className='mt-5 px-4 py-2 bg-gray-200 rounded-sm hover:bg-gray-300 duration-200' to={"/"}>Go Back</Link>
            <div>
                {detail.map((c)=> (
                    <div className='lg:flex'>
                        <img className='mt-12 w-full lg:w-[50%]' src={c.flags.png} alt={c.name.common}/>
                        <div className='mt-12 lg:ml-24'>
                            <h1 className='text-xl font-bold lg:text-2xl'>Name : {c.name.common}</h1>
                            <h1 className='lg:text-2xl'><span className='font-semibold'>Population</span> : {c.population}</h1>
                            <h1 className='lg:text-2xl'><span className='font-semibold'>Region</span> : {c.region}</h1>
                            <h1 className='lg:text-2xl'><span className='font-semibold'>Subregion</span> : {c.subregion}</h1>
                            <h1 className='lg:text-2xl'><span className='font-semibold'>Capital</span> : {c.capital}</h1>
                            <h1 className='lg:text-2xl'><span className='font-semibold'>Border</span> : {c.borders}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Country