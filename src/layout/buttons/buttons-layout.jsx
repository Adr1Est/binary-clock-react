function ButtonsApp({funcionStart, funcionStop}){

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-5 w-full p-4">
        <button className="bg-gray-800 hover:bg-gray-500 text-gray-300 hover:text-green-500 font-bold w-3/5 md:w-2/5 rounded-xl p-3" onClick={funcionStart}>Start</button>
        <button className="bg-gray-800 hover:bg-gray-500 text-gray-300 hover:text-red-500 font-bold w-3/5 md:w-2/5 rounded-xl p-3" onClick={funcionStop}>Stop</button>
      </div>
    </>
  )
}

export default ButtonsApp