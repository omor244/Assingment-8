import React, { useEffect, useState } from 'react';
import { getfromLs } from '../../Components/Utilites/Utilites';
import Installedcard from './Installedcard';
import { removeFromLs } from "../../Components/Utilites/Utilites";
const Installationpage = () => {


  const [data, setdata] = useState([])

  useEffect(()=>{
    
    const card = getfromLs()

    setdata(card)
 },[])

  const handelunstall = data => {
    removeFromLs(data)

    const remainning = getfromLs()
    setdata(remainning)
    

  }
  return (
    <section>
      <div>
        {
          data.map(cart => <Installedcard handelunstall={handelunstall} key={cart.id} cart={cart} ></Installedcard>)
        }
      </div>
    </section>
  );
};

export default Installationpage;