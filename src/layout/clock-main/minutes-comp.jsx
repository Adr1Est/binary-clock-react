import LedLight from "./led-light"

function MinutesLayout({obtenerClases, minutos}){

  return(
    <>
      <div className="flex flex-row items-end w-1/3">
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <LedLight clases={obtenerClases}/>
          <LedLight clases={obtenerClases}/>
          <LedLight clases={obtenerClases}/>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <LedLight clases={obtenerClases}/>
          <LedLight clases={obtenerClases}/>
          <LedLight clases={obtenerClases}/>
          <LedLight clases={obtenerClases}/>
        </div>
      </div>
    </>
  )
}

export default MinutesLayout