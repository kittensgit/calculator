import React from 'react'

const ButtonBox = ({children}) => { // children - компонент будет отображать все, что находится между открывающим и закрывающим тегами, при вызове компонента.
  return (
    <div className='buttonBox'>
        {children}
    </div>
  )
}

export default ButtonBox