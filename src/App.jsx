import React, { useState } from 'react';
import Card from './components/Card/Card';
import Form from './components/Form/Form';

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardHolder: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    CVC: '',
  });

  function handleCardForm(e, holder, number, month, year, cvc) {
    if (!holder);
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      cardHolder: holder,
      cardNumber: number,
      expMonth: month,
      expYear: year,
      CVC: cvc,
    }));
  }

  return (
    <div className="App">
      <Card {...cardInfo} />
      <Form handleCardForm={handleCardForm} {...cardInfo} />
    </div>
  );
}

export default App;
