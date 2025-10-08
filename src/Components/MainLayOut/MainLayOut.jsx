import { Outlet, useNavigation } from "react-router";
import Navber from "../../Pages/Navber/Navber";
import Footer from "../../Pages/Footer/Footer";
import Loading from "../Loading/Loading";



const MainLayOut = () => {
    const navigation = useNavigation()
    console.log(navigation)
    return (
        <div className="flex flex-col min-h-screen">
             
           <Navber></Navber>
             {navigation.state === "loading" && <Loading />}
             <main className="flex-1">
                <Outlet></Outlet>
             </main>

             <Footer></Footer>
        </div>
    );
};

export default MainLayOut;