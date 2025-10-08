import { useNavigate } from 'react-router';
import error from '../../assets/error-404.png'

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center mt-24'>
            
            <div className='text-center'>
                <img className='mx-auto' src={error} alt="" />
                <h1 className='text-6xl font-bold'>Oops, page not found!</h1>
                <p className='text-xl mt-4 text-[#627382]'>The page you are looking for is not available.</p>
                <button onClick={() => navigate(-1)} className='btn mt-4 btn-primary px-14'>Go Back!</button>
            </div>
            
        </div>
    );
};

export default ErrorPage;