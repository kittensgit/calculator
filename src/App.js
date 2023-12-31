import './index.css';
import Wrapper from './Components/Wrapper';
import Screen from './Components/Screen';
import ButtonBox from './Components/ButtonBox';
import Button from './Components/Button';
import CalcProvider from './Context/CalcContext';

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=']
]

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />   {/* тут будут цыферки писаться */}
        <ButtonBox>
          {btnValues.flat().map((btn, index) => (
            <Button
              value={btn}
              key={index}
            />
          ))} {/* flat()  из подмассивов делает единый массив*/}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
