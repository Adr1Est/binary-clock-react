import LedLight from "./led-light"
import { useState, useEffect } from "react"

function SecondsLayout({segundos, clasePrincipal}){
  const ledOffClassName = "bg-red-900 opacity-25"
  const ledOnClassName = "bg-red-300"
  const [firstHourDigitStateOne, setFirstHourDigitStateOne] = useState(ledOffClassName)
  const [firstHourDigitStateTwo, setFirstHourDigitStateTwo] = useState(ledOffClassName)
  const [firstHourDigitStateFour, setFirstHourDigitStateFour] = useState(ledOffClassName)
  const [firstHourDigitStateEight, setFirstHourDigitStateEight] = useState(ledOffClassName)
  const [secondHourDigitStateOne, setSecondHourDigitStateOne] = useState(ledOffClassName)
  const [secondHourDigitStateTwo, setSecondHourDigitStateTwo] = useState(ledOffClassName)
  const [secondHourDigitStateFour, setSecondHourDigitStateFour] = useState(ledOffClassName)
  const [secondHourDigitStateEight, setSecondHourDigitStateEight] = useState(ledOffClassName)
    
  const clockRules = {
      ledValueOne: [1, 3, 5, 7, 9],
      ledValueTwo: [2, 3, 6, 7],
      ledValueFour: [4, 5, 6, 7],
      ledValueEight: [8, 9]
  }
    
  const _getDigitList = (num) => {
    const digitList = [...num].map((n)=> parseInt(n))
    return digitList
  }
    
  const updateLights = ()=> {
    const [firstDigit, secondDigit] = _getDigitList(segundos)
    setFirstHourDigitStateOne(clockRules.ledValueOne.includes(firstDigit) ? ledOnClassName : ledOffClassName)
    setFirstHourDigitStateTwo(clockRules.ledValueTwo.includes(firstDigit) ? ledOnClassName : ledOffClassName)
    setFirstHourDigitStateFour(clockRules.ledValueFour.includes(firstDigit) ? ledOnClassName : ledOffClassName)
    setFirstHourDigitStateEight(clockRules.ledValueEight.includes(firstDigit) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateOne(clockRules.ledValueOne.includes(secondDigit) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateTwo(clockRules.ledValueTwo.includes(secondDigit) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateFour(clockRules.ledValueFour.includes(secondDigit) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateEight(clockRules.ledValueEight.includes(secondDigit) ? ledOnClassName : ledOffClassName)
  }
    
  useEffect(()=>{
    updateLights()
  }, [segundos])

  return(
    <>
      <div className="flex flex-row items-end w-1/3">
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <LedLight claseComun={clasePrincipal} classLedState={firstHourDigitStateEight}/>
          <LedLight claseComun={clasePrincipal} classLedState={firstHourDigitStateFour}/>
          <LedLight claseComun={clasePrincipal} classLedState={firstHourDigitStateTwo}/>
          <LedLight claseComun={clasePrincipal} classLedState={firstHourDigitStateOne}/>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <LedLight claseComun={clasePrincipal} classLedState={secondHourDigitStateEight}/>
          <LedLight claseComun={clasePrincipal} classLedState={secondHourDigitStateFour}/>
          <LedLight claseComun={clasePrincipal} classLedState={secondHourDigitStateTwo}/>
          <LedLight claseComun={clasePrincipal} classLedState={secondHourDigitStateOne}/>
        </div>
      </div>
    </>
  )
}

export default SecondsLayout