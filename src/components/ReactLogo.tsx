import reactLogo from '../logo.svg'

const ReactLogo = () => {
  return (
    <img src={reactLogo} alt="React Logo" style={{
        position:'fixed',
        bottom: '20px',
        right: '5px',
        width: '130px'
    }}/>
  )
}

export default ReactLogo