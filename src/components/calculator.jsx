import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import {getCreditAmount, getMonthlyPayment, resetData, getPercent} from '../utils';
import {credit} from '../const';

  const {maxPrice, minPrice, priсeStep, minDownPaymentPercent, maxDownPaymentPercent, percentStep, minTime,  maxTime, interestRate} = credit;

function Calculator(props) {
  const {creditData, setPrice, setTime, setDownpayment, setNumber} = props;
  const {price, downPayment, time, number} = creditData;

  const monthlyPayment = getMonthlyPayment(price, downPayment, interestRate, time);
  const creditAmount = getCreditAmount(downPayment, time, monthlyPayment);

  const handlePriceInput = (evt) => {
    const cost = document.querySelector('#cost');
    const costRange = document.querySelector('#cost-range');

    if (Number(evt.target.value) < minPrice || Number(evt.target.value) > maxPrice ) {
      cost.value = resetData(cost.value, maxPrice, minPrice);
      setPrice(cost.value);
      costRange.value = cost.value;
      setDownpayment(minDownPaymentPercent);
    } else {
      setPrice(evt.target.value);
      setDownpayment(minDownPaymentPercent);
    }
  };

  const handlePriceRange = (evt) => {
    const cost = document.querySelector('#cost');
    const costRange = document.querySelector('#cost-range');

    costRange.value = evt.target.value;
    cost.value = costRange.value;
    setPrice(costRange.value);
    setDownpayment(minDownPaymentPercent);
  };

  const handleDownpaymentInput = (evt) => {
    const downpayment = document.querySelector('#contribution');
    const downpaymentRange = document.querySelector('#downpayment');

    if (downpayment.value < minDownPaymentPercent || downpayment.value > maxDownPaymentPercent) {
      downpayment.value = resetData(downpayment.value, maxDownPaymentPercent, minDownPaymentPercent);
      downpaymentRange.value = downpayment.value;
      setDownpayment(downpayment.value);
    } else {
      downpayment.value = evt.target.value;
      downpaymentRange.value = evt.target.value;
      setDownpayment(evt.target.value);
    }
  };

  const handleDownPaymentRange = (evt) => {
    const downpayment = document.querySelector('#contribution');

    downpayment.value = evt.target.value;
    setDownpayment(evt.target.value);
  };

  const handleTimeInput = (evt) => {
    const time = document.querySelector('#time');
    const timeRange = document.querySelector('#time-range');

    if (time.value < minTime || time.value > maxTime) {
      time.value = resetData(time.value, maxTime, minTime);
      timeRange.value = time.value;
      setTime(time.value);
    } else{
      timeRange.value = evt.target.value;
      setTime(evt.target.value);
    }
  };

  const handleTimeRange = (evt) => {
    const time = document.querySelector('#time');

    time.value = evt.target.value;
    setTime(evt.target.value);
  };

  return (
    <form className="calculator__form" action="https://eoj3r7f3r4ef6v4.m.pipedream.net" method="POST">
      <div className="calculator__item calculator__item--cost">
        <label className="calculator__label" htmlFor="cost">Стоимость автомобиля</label>
        <input className="calculator__input" id="cost" type="number" onInput={handlePriceInput}
        min={minPrice} max={maxPrice} placeholder={`${minPrice} рублей`} value={price}/>
        <div className="calculator__range">
          <input id="cost-range" type="range" step={priсeStep} onChange={handlePriceRange}
          defaultValue={price} min={minPrice} max={maxPrice} />
        </div>
      </div>
      <div className="calculator__item calculator__item--downpayment">
        <label className="calculator__label" htmlFor="contribution">Первоначальный взнос</label>
        <div className="calculator__input">
          <span>{Math.round(price * (downPayment / 100))}</span>
            <input className=" calculator__percent calculator__input" id="contribution" type="number" 
            onInput={handleDownpaymentInput} value={downPayment} 
            min={minDownPaymentPercent} max={maxDownPaymentPercent} />
        </div>
        <div className="calculator__range">
          <input id="downpayment" type="range" step={percentStep} onChange={handleDownPaymentRange}
          value={downPayment} min={minDownPaymentPercent} max={maxDownPaymentPercent}/>
        </div>
      </div>
      <div className="calculator__item calculator__item--time">
        <label className="calculator__label" htmlFor="time">Срок лизинга</label>
        <input className="calculator__input" id="time" type="number" onInput={handleTimeInput}
        min={minTime} max={maxTime} placeholder={minTime} defaultValue={time}/>
        <div className="calculator__range">
          <input id="time-range" type="range" step="1" onChange={handleTimeRange}
          min={minTime} max={maxTime} defaultValue={time}/>
        </div> 
      </div>
      <div className="calculator__item calculator__label">
        <span>Сумма договора лизинга</span>
        <span>{creditAmount}</span>
      </div>
      <div className="calculator__item calculator__label">
        <span>Ежемесячный платеж от</span>
        <span>{monthlyPayment}</span>
      </div>
      <button className="calculator__button" type="submit">
        <span>Оставить заявку</span>
        <span></span>
      </button>
    </form>
)
}

Calculator.propTypes = {
  creditData: PropTypes.shape({
    price: PropTypes.number ,
    downPayment: PropTypes.number,
    time: PropTypes.number,
  })
};
  
const mapStateToProps = (state) => {
  return {
    creditData: state.creditData
  };
};
  
const mapDispatchToProps = (dispatch) => ({
  setPrice(price) {
    dispatch(ActionCreator.setPrice(price));
  },
  setTime(time) {
    dispatch(ActionCreator.setTime(time));
  },
  setDownpayment(downpayment) {
    dispatch(ActionCreator.setDownpayment(downpayment));
  },
  setNumber(data) {
    dispatch(ActionCreator.setNumber(data));
  },
});
  
export {Calculator};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);