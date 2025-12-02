import afu from '../assets/AFROJ.jpg'

export default function Home() {
  return (
    <div className='w-full h-screen '>
      <div className='flex flex-col md:flex-row justify-center items-center h-full gap-2 w-full min-h-screen'>
        
          <div className="img w-[200px] h-[200px]   ">
            <img src={afu} alt="" className=' w-full h-full rounded-full object-cover object-center ' />
          </div>
          <div className="dis">
            <h2 className='ring-2 ring-red-300 font-extrabold tracking-widest bg-gradient-to-r from-blue-200 via-black to-orange-600 text-transparent bg-clip-text  '>CODERAFROJ</h2>
            <p>Hiiii </p>
          </div>
        

      </div>
      
    </div>
  )
}
