function RenderHour({obtenerHoras, obtenerMinutos, obtenerSegundos}){

  return(
    <>
      <div className="flex justify-center items-center font-bold text-gray-500 mt-3 p-4">
        <p>{`${obtenerHoras}:${obtenerMinutos}:${obtenerSegundos}`}</p>
      </div>
    </>
  )
}

export default RenderHour