import myImg from './../assets/Smon.jpg';
import {HashLink as Link} from 'react-router-hash-link'

function Home(){
    return (
        <>
       <div className=' text-center'>
        <div className='md:flex m-20 mt-32'>
        <div className=' text-center '>
            <h1 className=' text-5xl md:text-8xl py-2 text-white font-bold font-serif italic'>Smon Ftwi </h1>
            <h3 className=' text-2xl py-2'>AI/ML Engineer</h3>
             <p> Data Science | Natural Language processing | <br></br>Computer vision | Web Development | Networking</p>
           </div>
           <div className="mx-auto bg-gradient-to-b rounded-full w-80 h-80 relative overflow-hidden">
            <img src={myImg} alt="sorry image not available" />
          </div>
          </div>
          <div className='bg-sky-500 hover:bg-sky-700 w-28 rounded-xl p-2 ml-32 mb-24'>
    <Link to='/#contact' smooth className='text-white px-2 py-2 rounded-lg font-serif font-bold'>
        Contact
    </Link>
</div>

        </div>
        </>
    )
}

export default Home;