import HoursLayout from "./hours-comp"
import MinutesLayout from "./minutes-comp"
import SecondsLayout from "./seconds-comp"

function ClockMain({obtenerHoras, obtenerMinutos, obtenerSegundos}){

  return (
    <>
      <div className="flex flex-row items-center mt-5 w-full">
        <HoursLayout horas={obtenerHoras}/>
        <MinutesLayout minutos={obtenerMinutos}/>
        <SecondsLayout segundos={obtenerSegundos}/>
      </div>
    </>
  )
}

export default ClockMain