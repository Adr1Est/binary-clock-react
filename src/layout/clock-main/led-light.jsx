function LedLight({claseComun, classLedState}){
  return(
    <>
      <div className={`${claseComun} ${classLedState}`}></div>
    </>
  )
}

export default LedLight