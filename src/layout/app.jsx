import './app.css'
import ClockMain from './clock-main/clock-main-comp'
import ButtonsApp from './buttons/buttons-layout'
import { useEffect, useState } from 'react'
import RenderHour from './real-time-hour/normal-hour'

function App (){
  const [realTimeHour, setHour] = useState(null)
  const [intervalId, setIntervalId] = useState(null)

  const _getHour = () => {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  const _startClock = ()=>{
    _stopClock() //Se asegura de parar el intervalo anterior
    const hourInterval = setInterval(()=>{
      setHour(_getHour())
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
      setHour(_getHour())
    }, 1000)
    setIntervalId(hourInterval)

    return ()=> clearInterval(hourInterval)
  }, [])

  useEffect(()=>{
    console.log(realTimeHour)
  }, [realTimeHour])

  return (
    <>
      <div className='flex flex-col gap-5 w-full lg:w-200 p-5'>
        <ClockMain/>
        <RenderHour realTime={realTimeHour}/>
        <ButtonsApp funcionStart={_startClock} funcionStop={_stopClock}/>
      </div>
    </>
  )
}

export default App