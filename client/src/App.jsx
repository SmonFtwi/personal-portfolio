

import {Moon } from 'phosphor-react'
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import { GithubLogo , LinkedinLogo , EnvelopeSimple} from 'phosphor-react'


function App() {
 

  return (
    <>
      <div className=' bg-slate-900 text-white'  >
        <div className='min-h-screen'>
          <Header/>
          <Home/>
          <About/>
          <Project/>
          <Footer/>

        </div>
      </div>
    </>
  )
}

export default App;

export function Header(){
  return (
    <nav className=' px-10 py-5  flex justify-between shadow-md bg-slate-950 '>
    <h1 className=' text-xl font-serif rounded-full border-double border-4 border-sky-700 p-1'> SF</h1>
    <ul className=' flex items-center'>
      
      <li >
        <a  className=' bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-lg mr-4'
        href="#">Resume</a>
      </li>
      <li >
        <a  className=' bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-lg mr-4 hidden sm:block'
        href="#">About Me</a>
      </li>
      <li >
      <a className='bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-lg mr-4 hover:transition ease-in-out duration-300 hidden sm:block' href="#">Projects</a>

      </li>
      <li className=' cursor-pointer text-xl  '>
       <Moon size={32}  />
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
            <a href='https://github.com/SmonFtwi' target='blank'><GithubLogo size={32} /></a>
            <a href='https://www.linkedin.com/in/smon-ftwi-59b44720a/' target='blank'> <LinkedinLogo size={32} /></a>
            <a href="mailto:smonftwi1@gmail.com"> <EnvelopeSimple size={32} /> </a>
           </div>
        </div>
      </>
  )
}
