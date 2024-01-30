import myImg from './../assets/Smon.jpg';
import {HashLink as Link} from 'react-router-hash-link'

function Home(){
    return (
        <>
       <div className=' flex flex-col'>
        <div className='flex flex-col md:flex-row justify-center align-middle m-14'>
        <div className=' text-center '>
            <h1 className=' text-5xl md:text-8xl py-2 text-white font-bold font-serif italic'>Smon Ftwi </h1>
            <h3 className=' text-2xl py-2'>AI/ML Engineer</h3>
            
           </div>
           <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden">
            <img src={myImg} alt="sorry image not available" />
          </div>
          </div>
          <div className='bg-sky-500 hover:bg-sky-700 w-28 rounded-xl p-2 md:ml-32 mb-24 ml-36 '>
          <Link to='/#contact' smooth className='text-white px-2 py-2 rounded-lg font-serif font-bold'>
        Contact
           </Link>
</div>

        </div>
        </>
    )
}

export default Home;