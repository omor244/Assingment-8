import React, { useEffect, useState } from 'react';
import { getfromLs } from '../../Components/Utilites/Utilites';
import Installedcard from './Installedcard';
import { removeFromLs } from "../../Components/Utilites/Utilites";
const Installationpage = () => {


  const [data, setdata] = useState([])

  useEffect(() => {

    const card = getfromLs()

    setdata(card)
  }, [])

  const handelunstall = data => {
    removeFromLs(data)

    const remainning = getfromLs()
    setdata(remainning)


  }

  const handelsort = type =>{
    console.log(type)

    if(type === 'Low'){
      const sorted = [...data].sort((a,b) => a.downloads - b.downloads)
      setdata(sorted)
    }
   else if(type === 'High'){
      const sorted = [...data].sort((a,b) => b.downloads - a.downloads)
      setdata(sorted)
    }
    else  {
      setdata(data)
    }
  }
  return (
    <section>
      <div className="text-center py-14 ">
        <h1 className="font-bold text-3xl lg:text-4xl mb-3">Your Installed Apps</h1>
        <p className="text-[#627382] text-lg">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='flex justify-between items-center px-9'>
        <h1 className='text-4xl font-bold'>{data.length} Apps Found</h1>
        <div>
          <select defaultValue="Pick a font" className="select select-ghost">
            <option  >Sort By Size</option>
            <option onClick={() => handelsort('Low')}>Low-High</option>
            <option onClick={() => handelsort('High')}>High-Low</option>
          
          </select>
        </div>
      </div>
      <div>
        {
          data.map((cart,idx) => <Installedcard handelunstall={handelunstall} key={idx} cart={cart} ></Installedcard>)
        }
      </div>
    </section>
  );
};

export default Installationpage;