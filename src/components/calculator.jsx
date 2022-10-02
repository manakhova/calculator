const creditData1 = {
  downPayment: 1,
  price: 1000000,
  time: 1
}

function Calculator(props) {
    const {credit, creditType, creditData, setPrice, setTime, setDownpayment, offerData, setOfferData} = props;
    const {maxPrice, minPrice, priсeStep, minDownPaymentPercent, maxDownPaymentPercent, percentStep, minTime,  maxTime} = credit;

    return (
      <form className="calculator__form" action="https://eoj3r7f3r4ef6v4.m.pipedream.net" method="POST">
        <div className="calculator__item calculator__item--cost">
          <label className="calculator__label" htmlFor="cost">Стоимость автомобиля</label>
           <input className="calculator__input" id="cost" type="number" disabled
           min={minPrice} max={maxPrice} placeholder={`${minPrice} рублей`} value={creditData1.price}/>
           <div className="calculator__range">
            <input id="cost-range" type="range" step={priсeStep} defaultValue={minPrice} disabled
            min={minPrice} max={maxPrice} />
          </div>
        </div>
        <div className="calculator__item">
          <label className="calculator__label" htmlFor="contribution">Первоначальный взнос</label>
          <input className="calculator__input" id="contribution" type="number" defaultValue={creditData1.downPayment}
          min={minPrice * minDownPaymentPercent} max={creditData1.price * maxDownPaymentPercent}/>
          <div className="calculator__percent">{creditData1.downPayment}%</div>
          <div className="calculator__range">
            <input id="downpayment" type="range" step={percentStep} defaultValue={minDownPaymentPercent} 
            min={minDownPaymentPercent} max={maxDownPaymentPercent}/>
          </div>
        </div>
        <div className="calculator__item calculator__item--time">
          <label className="calculator__label" htmlFor="time">Срок лизинга</label>
          <input className="calculator__input" id="time" type="number" 
          min={minTime} max={maxTime} placeholder={minTime} value={creditData1.time}/>
          <div className="calculator__range">
            <input id="time-range" type="range" step="1" min={minTime} max={maxTime} defaultValue={minTime}/>
          </div> 
        </div>
        <div className="calculator__item calculator__label">
            <span>Сумма договора лизинга</span>
            <span>{1}</span>
        </div>
        <div className="calculator__item calculator__label">
            <span>Ежемесячный платеж от</span>
            <span>{1}</span>
        </div>
        <button className="calculator__button" type="submit">
          <span>Оставить заявку</span>
          <span></span>
          </button>
      </form>
    )
}

export default Calculator;