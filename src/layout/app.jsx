import './app.css'
import ClockMain from './clock-main/clock-main-comp'
import ButtonsApp from './buttons/buttons-layout'

function App (){

  return (
    <>
      <div className='flex flex-col gap-5 w-full lg:w-4/6 border-3 border-gray-800 rounded-xl p-5'>
        <ClockMain />
        <ButtonsApp/>
      </div>
    </>
  )
}

export default App