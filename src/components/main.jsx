import Calculator from './calculator';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';

function Main(props) {
  const {creditData} = props;
  return (
    <div className="calculator">
      <h1 className="calculator__title">Рассчитайте стоимость автомобиля в&nbsp;лизинг</h1>
      <Calculator creditData={creditData}/>
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


