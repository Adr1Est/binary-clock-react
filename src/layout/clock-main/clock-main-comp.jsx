import HoursLayout from "./hours-comp"
import MinutesLayout from "./minutes-comp"
import SecondsLayout from "./seconds-comp"
import { useEffect, useState } from "react"

function ClockMain(){
  const [ledLightClass, setLedLightClass] = useState("");
  let ledClassName = "bg-red-950 opacity-25 w-10 h-10 md:w-20 md:h-20 rounded-full"

  useEffect(()=>{
    
    setLedLightClass(ledClassName)
  }, [ledClassName])

  return (
    <>
      <div className="flex flex-row items-center mt-5 w-full">
        <HoursLayout obtenerClases={ledLightClass}/>
        <MinutesLayout obtenerClases={ledLightClass}/>
        <SecondsLayout obtenerClases={ledLightClass}/>
      </div>
    </>
  )
}

export default ClockMain