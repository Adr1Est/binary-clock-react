import HoursLayout from "./hours-comp"
import MinutesLayout from "./minutes-comp"
import SecondsLayout from "./seconds-comp"

function ClockMain({obtenerHoras, obtenerMinutos, obtenerSegundos}){
  const commonClass = "w-10 h-10 md:w-20 md:h-20 rounded-full"

  return (
    <>
      <div className="flex flex-row items-center mt-5 w-full">
        <HoursLayout horas={obtenerHoras} clasePrincipal={commonClass}/>
        <MinutesLayout minutos={obtenerMinutos} clasePrincipal={commonClass}/>
        <SecondsLayout segundos={obtenerSegundos} clasePrincipal={commonClass}/>
      </div>
    </>
  )
}

export default ClockMain