import { Outlet } from "react-router";
import Navber from "../../Pages/Navber/Navber";
import Footer from "../../Pages/Footer/Footer";



const MainLayOut = () => {
    return (
        <div className="flex flex-col min-h-screen">
             
           <Navber></Navber>
           
             <main className="flex-1">
                <Outlet></Outlet>
             </main>

             <Footer></Footer>
        </div>
    );
};

export default MainLayOut;