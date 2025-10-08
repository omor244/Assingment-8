import { Link } from 'react-router';
import hereimage from '../../assets/hero.png'
import googleplay from '../../assets/google.png'
import Appstore from '../../assets/AppStore.png'

const Prodactive = () => {
    return (
        <div >
            <div className="hero bg-base-300 pt-12 ">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold">We Build
                            <br />
                            <span className='text-[#7e45ea]'>Productive</span> Apps</h1>
                        <p className="py-6  text-[#627382]">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        
                        <div className='bg-base-300 py-10 flex  justify-center items-center gap-5'>
                            <a className='flex text-xl py-6 btn items-center justify-center'><span><img className='w-12 ' src={googleplay} alt="" /></span> Google Play</a>

                            <a className='flex py-6 text-xl btn items-center justify-center'><span><img className='w-24' src={Appstore} alt="" /></span> <span className='ml-[-16px]'>App Store</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-base-300'>
                <img className='mx-auto' src={hereimage} alt="" />
            </div>
        </div>
    );
};

export default Prodactive;