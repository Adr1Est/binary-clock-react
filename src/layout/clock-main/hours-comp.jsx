import { useEffect } from "react"
import LedLight from "./led-light"

function HoursLayout({obtenerClases, horas}){
  const _getDigitList = (num) => {
    const digitList = [...num].map((n)=> parseInt(n))
    return digitList
  }

  const clockRules = {
      ledValueOne: [1, 3, 5, 7, 9],
      ledValueTwo: [2, 3, 6, 7],
      ledValueFour: [4, 5, 6, 7],
      ledValueEight: [8, 9]
  }

  const _firstDigitController = () => {
    const firstDigitLedLight = document.querySelector("#firstHourDigit-1")
    const digits = _getDigitList(horas)
    const firstDigit = digits[0]
    for(let key in clockRules){
      if(firstDigit === 0){
        firstDigitLedLight.classList.remove("bg-red-300")
        firstDigitLedLight.classList.add("bg-red-950")
        firstDigitLedLight.classList.add("opacity-25")
      }
      if(clockRules[key].includes(firstDigit)){ 
        firstDigitLedLight.classList.remove("bg-red-950")
        firstDigitLedLight.classList.remove("opacity-25")
        firstDigitLedLight.classList.add("bg-red-300")
      }else{
        firstDigitLedLight.classList.remove("bg-red-300")
        firstDigitLedLight.classList.add("bg-red-950")
        firstDigitLedLight.classList.add("opacity-25")
      }
    }
  }


  const ledController = () => {
    _firstDigitController()
  }

  useEffect(()=>{
    ledController()
  }, [horas])

  return(
    <>
      <div className="flex flex-row items-end w-1/3">
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <LedLight id="firstHourDigit-2" clases={obtenerClases}/>
          <LedLight id="firstHourDigit-1" clases={obtenerClases}/>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <LedLight id="secondHourDigit-8" clases={obtenerClases}/>
          <LedLight id="secondHourDigit-4" clases={obtenerClases}/>
          <LedLight id="secondHourDigit-2" clases={obtenerClases}/>
          <LedLight id="secondHourDigit-1" clases={obtenerClases}/>
        </div>
      </div>
    </>
  )
}

export default HoursLayout