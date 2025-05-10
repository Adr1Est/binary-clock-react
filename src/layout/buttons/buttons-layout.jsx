function ButtonsApp({funcionStart, funcionStop}){

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-5 w-full p-4">
        <button className="bg-gray-600 hover:bg-gray-300 text-amber-300 hover:text-amber-700 font-bold w-2/5 md:w-1/5 rounded-xl p-3" onClick={funcionStart}>Start</button>
        <button className="bg-gray-600 hover:bg-gray-300 text-amber-300 hover:text-amber-700 font-bold w-2/5 md:w-1/5 rounded-xl p-3" onClick={funcionStop}>Stop</button>
      </div>
    </>
  )
}

export default ButtonsApp