import { useEffect, useState } from "react"
import LedLight from "./led-light"

function HoursLayout({horas}){
  const ledOffClassName = "bg-red-900 opacity-25 w-10 h-10 md:w-20 md:h-20 rounded-full"
  const ledOnClassName = "bg-red-300 w-10 h-10 md:w-20 md:h-20 rounded-full"
  const [firstHourDigitStateOne, setFirstHourDigitStateOne] = useState(ledOffClassName)
  const [firstHourDigitStateTwo, setFirstHourDigitStateTwo] = useState(ledOffClassName)
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
    const [firstDigit, secondDigit] = _getDigitList(horas)
    setFirstHourDigitStateOne(clockRules.ledValueOne.includes(firstDigit) ? ledOnClassName : ledOffClassName)
    setFirstHourDigitStateTwo(clockRules.ledValueTwo.includes(firstDigit) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateOne(clockRules.ledValueOne.includes(secondDigit) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateTwo(clockRules.ledValueTwo.includes(secondDigit) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateFour(clockRules.ledValueFour.includes(secondDigit) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateEight(clockRules.ledValueEight.includes(secondDigit) ? ledOnClassName : ledOffClassName)
  }

  useEffect(()=>{
    updateLights()
    console.log(`Nueva hora => ${horas}`);
  }, [horas])

  return(
    <>
      <div className="flex flex-row items-end w-1/3">
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <LedLight clases={firstHourDigitStateTwo}/>
          <LedLight clases={firstHourDigitStateOne}/>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <LedLight clases={secondHourDigitStateEight}/>
          <LedLight clases={secondHourDigitStateFour}/>
          <LedLight clases={secondHourDigitStateTwo}/>
          <LedLight clases={secondHourDigitStateOne}/>
        </div>
      </div>
    </>
  )
}

export default HoursLayout