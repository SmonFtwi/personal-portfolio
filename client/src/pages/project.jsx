import shCart from './../assets/shopping-cart.png'
import mCard from './../assets/memory-card.png'


function Project(){
    return (
        <>
         <div className=' md:m-20' id="project">
         <h2 className='text-5xl py-2 text-sky-600 font-medium font-serif p-5 ml-8'>Projects</h2>
               <div className='display:block md:flex justify-center align-middle m-5 p-4 rounded shadow-lg '>

                   <div className=' mx-auto  w-80 h-80 md:w-2/6 md:h-auto relative overflow-hidden rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300'>
                        <img src={shCart}></img>
                    </div>
                <div className=' '>
                    <h2 className='text-4xl text-sky-600 font-medium font-serif mb-5'>Shopping Cart</h2>
                    <p> <strong>Built with:  </strong>ReactJS, vite, css and vercel</p>
                    <p  className='text-md py-5 leading-8 max-w-xl mx-auto md:text-xl flex flex-col justify-between'>
                        A simulated shopping cart model, designed for an e-commerce website, showcasing its 
                    functionality and populated with product data retrieved from the Fake Store API.
                    </p>
                   
                    <div>
                        <button className=' bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-lg mr-4'> View Code</button>
                        <a href='https://shopping-cart-zeta-puce.vercel.app/  ' target='blank'><button className=' bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-lg mr-4'>Live Preview</button></a>
                    </div>
                    </div>
            </div>
                  <div className='display:block md:flex justify-center align-middle m-5 p-4 rounded shadow-lg  mt-14'>

                   <div className=' mx-auto  w-80 h-80 md:w-2/6 md:h-auto relative overflow-hidden rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300'>
                        <img src={mCard}></img>
                    </div>
                <div className=' '>
                    <h2 className='text-4xl text-sky-600 font-medium font-serif mb-5'>Memory Card</h2>
                    <p> <strong>Built with:  </strong>ReactJS, vite, css and vercel</p>
                    <p  className='text-md py-5 leading-8 max-w-xl mx-auto md:text-xl flex flex-col justify-between'>
                    Memory-Card is an engaging project that tests your memory skills. 
                    Challenge yourself to remember random images generated from the Giphy API. Every time you click, the images will shuffle. 
                    Be careful not to select the same image twice, as it will eliminate you from the challenge.
                    </p>
                   
                    <div>
                        <button className=' bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-lg mr-4'> View Code</button>
                        <a href='https://memory-card-puce-alpha.vercel.app/ ' target='blank'><button className=' bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-lg mr-4'>Live Preview</button></a>
                    </div>
                    </div>
                    </div>
         </div>
        </>
    )
}

export default Project;