import NumberFlow from "@number-flow/react"
function RenderHour({obtenerHoras, obtenerMinutos, obtenerSegundos}){

  return(
    <>
      <div className="flex flex-row justify-center items-center font-bold text-gray-500 mt-3 p-4">
        <NumberFlow value={obtenerHoras} format={{ minimumIntegerDigits: 2 }} />:
        <NumberFlow value={obtenerMinutos} format={{ minimumIntegerDigits: 2 }} />:
        <NumberFlow value={obtenerSegundos} format={{ minimumIntegerDigits: 2 }} />
      </div>
    </>
  )
}

export default RenderHour