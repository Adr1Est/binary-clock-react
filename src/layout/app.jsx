import './app.css'
import ClockMain from './clock-main/clock-main-comp'
import ButtonsApp from './buttons/buttons-layout'
import { useEffect, useState } from 'react'
import RenderHour from './real-time-hour/normal-hour'

function App (){
  const [hoursStt, setHours] = useState("00")
  const [minutesStt, setMinutes] = useState("00")
  const [secondsStt, setSeconds] = useState("00")
  const [intervalId, setIntervalId] = useState(null)

  const _getHours = () => {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')

    return hours
  }
  const _getMinutes = () => {
    const now = new Date()
    const minutes = String(now.getMinutes()).padStart(2, '0')

    return minutes
  }
  const _getSeconds = () => {
    const now = new Date()
    const seconds = String(now.getSeconds()).padStart(2, '0')

    return seconds
  }

  const _startClock = ()=>{
    _stopClock() //Se asegura de parar el intervalo anterior
    const hourInterval = setInterval(()=>{
      setHours(_getHours())
      setMinutes(_getMinutes())
      setSeconds(_getSeconds())
    }, 1000)

    setIntervalId(hourInterval)
    console.log("Reloj funcionando");
  }


  const _stopClock = ()=>{
    if(intervalId){
      clearInterval(intervalId)
      setIntervalId(null)
      console.log("Reloj parado");
    } 
  }

  useEffect(()=>{
    const hourInterval = setInterval(()=>{
      setHours(_getHours())
      setMinutes(_getMinutes())
      setSeconds(_getSeconds())
    }, 1000)
    setIntervalId(hourInterval)

    return ()=> clearInterval(hourInterval)
  }, [])

  useEffect(()=>{
    console.log(`${hoursStt}:${minutesStt}:${secondsStt}`)
  }, [hoursStt, minutesStt, secondsStt])

  return (
    <>
      <div className='flex flex-col gap-5 w-full lg:w-200 p-5'>
        <ClockMain obtenerHoras={hoursStt} obtenerMinutos={minutesStt} obtenerSegundos={secondsStt}/>
        <RenderHour obtenerHoras={hoursStt} obtenerMinutos={minutesStt} obtenerSegundos={secondsStt}/>
        <ButtonsApp funcionStart={_startClock} funcionStop={_stopClock}/>
      </div>
    </>
  )
}

export default App