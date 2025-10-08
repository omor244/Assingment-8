import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";





const Appscard = ({ app }) => {
   
    const { image, title, ratingAvg, downloads,id } = app || {}
    return (
        <NavLink to={`/details/${id}`}>
            <div className="card bg-white  shadow-lg hover:scale-105">
                <figure className=" overflow-hidden">
                    <img
                        className="h-52 object-cover"
                        src={image}
                        alt="Not Found" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}

                    </h2>

                    <div className="card-actions justify-between">
                        <div className="badge badge-accent"> <span><GoDownload /></span>{Math.round(downloads / 10000)}k </div>
                        <div className="badge badge-secondary"><span><FaStar /></span> {ratingAvg}</div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Appscard;