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
    let digits = _getDigitList(horas)
    setFirstHourDigitStateOne(clockRules.ledValueOne.includes(digits[0]) ? ledOnClassName : ledOffClassName)
    setFirstHourDigitStateTwo(clockRules.ledValueTwo.includes(digits[0]) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateOne(clockRules.ledValueOne.includes(digits[1]) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateTwo(clockRules.ledValueTwo.includes(digits[1]) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateFour(clockRules.ledValueFour.includes(digits[1]) ? ledOnClassName : ledOffClassName)
    setSecondHourDigitStateEight(clockRules.ledValueEight.includes(digits[1]) ? ledOnClassName : ledOffClassName)
  }

  useEffect(()=>{
    updateLights()
    console.log(`Nueva hora => ${horas}`);
  }, [horas])

  return(
    <>
      <div className="flex flex-row items-end w-1/3">
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <LedLight id="firstHourDigit-2" clases={firstHourDigitStateTwo}/>
          <LedLight id="firstHourDigit-1" clases={firstHourDigitStateOne}/>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <LedLight id="secondHourDigit-8" clases={secondHourDigitStateEight}/>
          <LedLight id="secondHourDigit-4" clases={secondHourDigitStateFour}/>
          <LedLight id="secondHourDigit-2" clases={secondHourDigitStateTwo}/>
          <LedLight id="secondHourDigit-1" clases={secondHourDigitStateOne}/>
        </div>
      </div>
    </>
  )
}

export default HoursLayout