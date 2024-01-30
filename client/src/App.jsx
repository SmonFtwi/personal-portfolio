
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact';
import { GithubLogo , LinkedinLogo , EnvelopeSimple} from 'phosphor-react'
import {HashLink as Link} from 'react-router-hash-link'



function App() {
  

  return (
    <>
      <div className=' bg-slate-900 text-white relative'  >
        <div className='min-h-screen'>
          <Header/>
          <Home/>
          <About />
          <Project />
          <Contact />
          <Footer/>

        </div>
      </div>
    </>
  )
}

export default App;

export function Header(){
  return (
    <nav className=' px-10 py-5  flex justify-between shadow-md bg-slate-900 '>
    <h1 className=' text-xl font-serif rounded-full border-double border-4 border-sky-700 p-1'> SF</h1>
    <ul className=' flex items-center'>
      
      
      <li >
        <Link to='/#about' smooth className='text-white hover:bg-transparent hover:text-sky-500 px-2 py-2 rounded-lg mr-2 hidden font-serif font-bold sm:block'
       >About Me</Link>
      </li>
      <li >
      <Link to='/#about' smooth className='text-white hover:bg-transparent hover:text-sky-500 px-2 py-2 rounded-lg mr-2 hidden font-serif font-bold sm:block'>
    Skills
</Link>

      </li>
      <li >
      <Link to='/#project' smooth className='text-white hover:bg-transparent hover:text-sky-500 px-2 py-2 rounded-lg mr-2 hidden font-serif font-bold sm:block' 
      >Projects</Link>
      </li>
      <li >
      <Link to='/#contact' smooth className='text-white hover:bg-transparent hover:text-sky-500 px-2 py-2 rounded-lg mr-2 hidden font-serif font-bold sm:block' 
      >Contact</Link>
      </li>
      <li >
        <a  className='text-white hover:bg-transparent hover:text-sky-500 px-2 py-2 rounded-lg mr-2 hidden font-serif font-bold sm:block'
        href="https://drive.google.com/file/d/1J4TVXJyMbKKm162UeMoz6UFJdAtQauHx/view?usp=sharing" target='blank'>Resume</a>
      </li>
      
    </ul>

  </nav>
  )
}

export function Footer(){
  return(
      <>
        <div className=' text-center shadow-2xl p-5 bg-slate-950 '>
          <p> &copy; 2023 Smon Ftwi</p>
          <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-400'>
            <a href='https://github.com/SmonFtwi' target='blank' className='cursor-pointer hover:scale-105 ease-in-out duration-300' ><GithubLogo size={32} /></a>
            <a href='https://www.linkedin.com/in/smon-ftwi-59b44720a/' target='blank' className='cursor-pointer hover:scale-105 ease-in-out duration-300'> <LinkedinLogo size={32} /></a>
            <a href="mailto:smonftwi1@gmail.com" className='cursor-pointer hover:scale-105 ease-in-out duration-300'> <EnvelopeSimple size={32} /> </a>
           </div>
        </div>
      </>
  )
}
