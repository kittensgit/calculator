import React, { useContext } from 'react'
import { CalcContext } from '../Context/CalcContext'

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

    const { calc, setCalc } = useContext(CalcContext)

    const handleBtnClick = () => {

        //user click operation
        const signClick = () => {
            setCalc({
                sign: value,
                res: !calc.res && calc.num ? calc.num : calc.res,
                num: 0
            })
        }

        //user click equals
        const equalsClick = () => {
            if (calc.res && calc.num) {
                const math = (a, b, sign) => {
                    const result = {
                        '+': (a, b) => a + b,
                        '-': (a, b) => a - b,
                        '*': (a, b) => a * b,
                        '/': (a, b) => a / b,
                    }
                    return result[sign](a, b)
                }

                setCalc({
                    res: math(calc.res, calc.num, calc.sign),
                    sign: '',
                    num: 0
                })
            }
        }

        // user click comma
        const commaClick = () => {
            setCalc({
                ...calc,
                num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
            })
        }

        //user click C
        const resetClick = () => {
            setCalc({
                sign: '', num: 0, res: 0
            })
        }

        //user click number
        const handleClickButton = () => {
            const numberString = value.toString()

            let numberValue;

            if (numberString === '0' && calc.num === 0) {
                numberValue = '0'
            } else {
                numberValue = Number(calc.num + numberString)
            }

            setCalc({
                ...calc,
                num: numberValue
            })
        }

        //user click persen
        const persenClick = () => {

        }

        const results = {
            '.': commaClick,
            'C': resetClick,
            '/': signClick,
            '-': signClick,
            '+': signClick,
            'x': signClick,
            '=': equalsClick,
            '%': persenClick
        }
        if (results[value]) {
            return results[value]() // Здесь проверяется наличие функции в объекте results с ключом value
        } else {
            return handleClickButton()
        }
    }

    return (
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}> {value} </button>
    )
}

export default Button