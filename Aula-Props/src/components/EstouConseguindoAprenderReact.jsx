import React from 'react'


const EstouConseguindoAprenderReact = (props) => {

  return (
    <div>
      {props.estouConseguindo ? <h1>Estou aprendendo react!</h1> : <h1>Preciso rever as aulas de kelson!</h1>}
    </div>
  )
}

export default EstouConseguindoAprenderReact