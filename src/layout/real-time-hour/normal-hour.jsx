function RenderHour({realTime}){

  return(
    <>
      <div className="flex justify-center items-center font-bold text-gray-500 mt-3 p-4">
        <p>{realTime}</p>
      </div>
    </>
  )
}

export default RenderHour