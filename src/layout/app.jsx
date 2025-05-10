import './app.css'
import ClockMain from './clock-main/clock-main-comp'
import ButtonsApp from './buttons/buttons-layout'

function App (){

  return (
    <>
      <div className='flex flex-col w-full lg:w-4/6 border-4 border-amber-300'>
        <ClockMain />
        <ButtonsApp/>
      </div>
    </>
  )
}

export default App