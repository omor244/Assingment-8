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
  return (
    <section>
      <div className="text-center py-14 ">
        <h1 className="font-bold text-3xl lg:text-4xl mb-3">Your Installed Apps</h1>
        <p className="text-[#627382] text-lg">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div>
        {
          data.map(cart => <Installedcard handelunstall={handelunstall} key={cart.id} cart={cart} ></Installedcard>)
        }
      </div>
    </section>
  );
};

export default Installationpage;