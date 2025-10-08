import useApps from "../../Hooks/useApps";
import Appscard from "../Appscard/Appscard";
import Banner from "../Banner/Banner";
import Prodactive from "../Prodactivesection/Prodactive";


const Home = () => {

    const { apps, loader } = useApps()
    console.log(apps, loader)
    const slicedApps = apps.slice(0, 8)
    return (
        <div className="bg-base-300 p-3 lg:p-0">
             <Banner></Banner>
              <Prodactive></Prodactive>

              <div className="text-center my-14 ">
                 <h1 className="font-bold text-3xl lg:text-4xl mb-3">Top Rated Productivity & <br />  Lifestyle  Apps</h1>
                 <p className="text-[#627382] text-lg">Explore all trending apps on the market — designed and developed by us.</p>
              </div>


              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8  p-8">
                 {
                    slicedApps.map(app => <Appscard key={app.id} app={app}></Appscard>)
                 }
              </div>
        </div>
    );
};

export default Home;