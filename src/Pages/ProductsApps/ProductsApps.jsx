
import { useEffect, useState } from 'react';
import useApps from '../../Hooks/useApps';
import Appscard from '../Appscard/Appscard';
import Loading from '../../Components/Loading/Loading';
// import { useNavigate } from 'react-router';


const ProductsApps = () => {
    //  const navigate = useNavigate()
    const   [search, setsearch] = useState('')
    const { apps, loader } = useApps()
     const [filterdata, setfilterdata] = useState([])
    const [load, setload] = useState(false)
    console.log(load)


      

  

    useEffect(() =>{
        if(apps.length > 0){
            setfilterdata(apps)
        }
    },[apps])

    useEffect(() =>{
         setload(true)
      
         const delay = setTimeout( () =>{
         const term = search.trim().toLocaleLowerCase()

           const filteredData = term ? apps.filter(a => a.title.toLocaleLowerCase().includes(term)) : apps 

           setfilterdata(filteredData)
           setload(false)
         },500)

        return () => clearTimeout(delay)

    },[search, apps])

   
    return (
        <div className='bg-base-200'>
            <div className="text-center py-14 ">
                <h1 className="font-bold text-3xl lg:text-4xl mb-3">Our All Applications</h1>
                <p className="text-[#627382] text-lg">Explore All Apps on the Market developed by us. We code for Millions.</p>
            </div>
              
             
            <div className='px-10 py-8 flex justify-between'>
                <h1 className='text-2xl font-bold '> {filterdata.length} Apps Found</h1>
                <div>
                    <label className="input ">
                        <svg className="h-[2em] cursor-pointer opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e) => setsearch(e.target.value)} type="search" className=" w-52 border-none  outline-none " placeholder="Search" />
                        
                    </label>
            
                    
                </div>
            </div>
      {
        loader ? <Loading></Loading> :   
            filterdata.length > 0 ? load ? <Loading></Loading> : <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8  p-8">
                {
                    filterdata.map(app => <Appscard key={app.id} app={app}></Appscard>)
                }

            </div>   :  <div className='w-96  mt-16 pb-18  mx-auto'>
                <h1 className='text-5xl font-extrabold text-gray-500'>No Data Found</h1>
               
            </div>
          } 
      
         

           
        </div>
    );
};

export default ProductsApps;