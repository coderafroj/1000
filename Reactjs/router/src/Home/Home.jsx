import afu from '../assets/AFROJ.jpg'

export default function Home() {
  return (
    <div className='w-full h-screen '>
      <div className='flex flex-col md:flex-row justify-center items-center h-full gap-9 md:gap-24 w-full min-h-screen'>
        
          <div className="img md:w-[400px] md:h-[400px] w-[300px] h-[300px] relative -z-20  ">
            <img src={afu} alt="" className=' w-full h-full rounded-full object-cover object-center border-4 border-sky-200 shadow-xl  ' />
            <div className='absolute inset-0 bg-black/60 md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full'></div>
          </div>
          <div className="dis md:w-1/3 w-1/2">
            <h2 className='ring-2 ring-red-300 font-extrabold tracking-widest bg-gradient-to-r from-blue-200 via-black to-orange-600 text-transparent bg-clip-text  '>CODERAFROJ</h2>
            <p className='capitalize mt-2'>hello i am a bca student and my aim is diffrent software build </p>
          </div>
        

      </div>
      
    </div>
  )
}
