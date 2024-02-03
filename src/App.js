import Wrapper from './Components/Wrapper';
import Screen from './Components/Screen';
import ButtonBox from './Components/ButtonBox';
import Button from './Components/Button';
import CalcProvider from './Context/CalcContext';
import Clock from './Components/Clock';

const btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
];

const App = () => {
    return (
        <CalcProvider>
            <Clock />
            <Wrapper>
                <Screen />
                <ButtonBox>
                    {btnValues.flat().map((btn, index) => (
                        <Button value={btn} key={index} />
                    ))}
                </ButtonBox>
            </Wrapper>
        </CalcProvider>
    );
};

export default App;
