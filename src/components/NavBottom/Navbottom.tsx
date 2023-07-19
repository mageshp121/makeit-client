


function Navbottom(props:any) {
    const Title=props.Title
    const subTitle=props. subTitle
    
  return (
    <>
    <div className="pt-16">
    <div className='bg-gradient-to-r overflow-hidden text-center  shadow-xl  flex gap-4   from-green-300  to-teal-600 via-teal-400 sm:ws md:w-screen h-72 p-5 ' >
      <div className=' shape-1 animate-off-on py-10 px-20 md:w-1/3 sm:w-1/3 flex-auto h-60'>
      <img src="/page-banner-shape-1.svg" alt="cour" />
      </div>
      <div className='md:w-1/3 flex flex-col justify-center sm:w-1/2 text-center h-60'>
          <h1 className='text-7xl font-semibold text-white '>
           {Title}
          </h1>
          <br />
          <h2 className="text-2xl  text-white">{subTitle}</h2>
        </div>
      <div className='md:w-1/3 shape-1 animate-off-on flex flex-col justify-end px-24 py-14  sm:w-1/3 flex-auto h-60' >
      <img className='w-32'src="/business-3d-stack-of-different-books.png" alt="cour" />
      </div>
    </div>
    </div>
    </>
  )
        
}

export default Navbottom