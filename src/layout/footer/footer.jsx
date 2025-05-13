import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer(){

  return (
    <>
      <div className="flex flex-row justify-center items-center text-gray-300 w-full">
        <p className='font-semibold opacity-30'>&copy; Adr1Est |</p>
        <a href="https://github.com/Adr1Est/binary-clock-react" target='_blank'>
          <FontAwesomeIcon 
            className='ml-1 opacity-30 hover:text-amber-400 hover:opacity-100' 
            icon={faGithub} 
          />
        </a>
      </div>
    </>
  )
}

export default Footer