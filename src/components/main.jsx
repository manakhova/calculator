import Calculator from './calculator';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Main(props) {
  const {creditData} = props;
  return (
    <div className="calculator">
      <h1 className="calculator__title">Рассчитайте стоимость автомобиля в&nbsp;лизинг</h1>
      <Calculator creditData={creditData}/>
      <div>
        <button className="calculator__button loading" type="submit">
          <span>Оставить заявку</span>
          <span></span>
        </button>
        <button className="calculator__button" type="submit" disabled>
          <span>Оставить заявку</span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

Calculator.propTypes = {
  creditData: PropTypes.shape({
    price: PropTypes.number ,
    downPayment: PropTypes.number,
    time: PropTypes.number,
    number: PropTypes.number
  })
};

const mapStateToProps = (state) => {
  return {
    creditData: state.creditData
  };
};

export {Main};
export default connect(mapStateToProps)(Main);


