import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";



const Installedcard = ({ cart,handelunstall }) => {
    const { image, title, ratingAvg, downloads, } = cart || {}


    return (
        <div className="flex max-w-full justify-between mt-6 px-10 items-center">
            <div className="flex gap-5">
                <img className="w-32 h-28 object-cover overflow-hidden rounded" src={image} alt="" />
               <div className="space-y-4 mt-4"> 
                <h1 className="font-bold text-xl">{title}</h1>
                  <div className="card-actions ">
                    <div className="badge text-[#00d390] font-semibold text-xl"> <span><GoDownload /></span>{Math.round(downloads / 1000000)}M </div>
                    <div className="badge text-[#ff8811] font-semibold text-xl "><span><FaStar /></span> {ratingAvg}</div>
                </div>
               </div>
            </div>
            <div>
                <button onClick={() => handelunstall(cart)} className="btn btn-accent ">Uninstall</button>
            </div>
        </div>
    );
};

export default Installedcard;