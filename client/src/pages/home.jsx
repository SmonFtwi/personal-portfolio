import { GithubLogo , LinkedinLogo , EnvelopeSimple} from 'phosphor-react'

function Home(){
    return (
        <>
       <div className=' text-center my-20 '>
        <div>
            <h1 className='  text-5xl md:text-8xl py-2 text-sky-600 font-medium font-serif'>Smon Ftwi</h1>
            <h3 className=' text-2xl py-2'>Full-stack Web developer</h3>
            <p className='text-md py-5 leading-8 max-w-xl mx-auto md:text-xl'>Junior full-stack web developer specializing 
              in MERN stack development invites you to connect with me below</p>
           </div>
           <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-400'>
            <a href='https://github.com/SmonFtwi' target='blank' className='cursor-pointer hover:scale-105 ease-in-out duration-300'><GithubLogo size={32} /></a>
            <a href='https://www.linkedin.com/in/smon-ftwi-59b44720a/' target='blank' className='cursor-pointer hover:scale-105 ease-in-out duration-300'> <LinkedinLogo size={32} /></a>
            <a href="mailto:smonftwi1@gmail.com" className='cursor-pointer hover:scale-105 ease-in-out duration-300'> <EnvelopeSimple size={32} /> </a>
           </div>
           <div className='flex justify-center'>
            <button className='bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-lg m-10 hidden sm:block'>More Info</button>
            </div>
           </div>
        </>
    )
}

export default Home;