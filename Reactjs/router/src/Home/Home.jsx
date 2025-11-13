export default function Home(){
  return(
    <div className="w-full flex flex-col md:flex-row gap-12 justify-center items-center">
      <div className="w-40 h-40 flex justify-center"><img className="w-full h-full rounded-full md:rounded-[50%] object-cover border-1 hover:border-sky-400 hover:border-2 duration-150 " src="https://images.pexels.com/photos/33402174/pexels-photo-33402174.jpeg"/></div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h2>MYSELF</h2>
       <h2 className="whitespace-nowrap"> C O D E R I N N U </h2> 
      </div>
    </div>
    )
}