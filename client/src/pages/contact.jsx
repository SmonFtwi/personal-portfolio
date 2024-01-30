import { EnvelopeSimple, Phone , MapPin } from "phosphor-react";

function Contact(){
    return <>
    
   <div className=' m-16' id="contact">
         <h2 className='text-5xl p-5 ml-8 text-white font-bold font-serif text-center'>Contact</h2>
         <p className=" text-white text-xl ml-10 text-center mb-10"> Get in touch with me</p>
         <ul className="flex flex-col md:ml-24 gap-4">
        <li className="flex items-center">
        <EnvelopeSimple size={32} className="text-sky-400/100 mr-4" />
        <div className="ml-2">
            <h3 className=" font-bold text-lg">Email</h3>
            <a href="mailto:smonftwi1@gmail.com">smonftwi1@gmail.com</a>
        </div>
        </li>
       <li className="flex items-center">
          <Phone size={32} className="text-sky-400/100 mr-4" />
          <div className="ml-2">
            <h3 className=" font-bold text-lg">Phone</h3>
            <p> +971508663790</p>
        </div>
        </li>
        <li className="flex items-center">
          <MapPin size={32} className="text-sky-400/100 mr-4" />
          <div className="ml-2">
            <h3 className=" font-bold text-lg">Location</h3>
            <p> Fujairah, UAE</p>
        </div>
        </li>
        
    </ul>

        </div>
    
    </>


}

export default Contact;