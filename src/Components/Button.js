import React from 'react'

const getStyleName = (btn) => {
    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt'
    }
    return className[btn] // className яв-ся объектом, а btn является переменной или значением, используемым в качестве ключа
}

const Button = ({ value }) => { //принимаем тот или инорй с символ нажатый пользовотелем

    return (
        <button className={`${getStyleName(value)} button`}> {value} </button>
    )
}

export default Button