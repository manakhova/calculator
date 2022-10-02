import Calculator from './calculator';
import {credit} from '../const';

function Main() {
  return (
    <div className="calculator">
      <h1 className="calculator__title">Рассчитайте стоимость автомобиля в&nbsp;лизинг</h1>
      <Calculator credit={credit}/>
    </div>
  );
}

export default Main;
