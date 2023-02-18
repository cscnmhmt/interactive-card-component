import React, { useState } from 'react';
import {
  FormWrapper,
  CardForm,
  FormLabel,
  FormInput,
  FlexItem,
  ConfirmButton,
} from './styled';

const Form = ({ handleCardForm, ...cardInfo }) => {
  const [inputNumber, setInputNumber] = useState('');
  const [inputHolder, setInputHolder] = useState('');
  const [inputMonth, setInputMonth] = useState('');
  const [inputYear, setInputYear] = useState('');
  const [inputCVC, setInputCVC] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleCardForm(
      e,
      inputHolder,
      inputNumber,
      inputMonth,
      inputYear,
      inputCVC
    );
  }

  // add blank space between card number
  function createSpace(e) {
    if (e.key === 'Backspace') return;
    if (e.target.value.length > 0 && e.target.value.length < 32) {
      if (e.target.value.length % 4 == 0) {
        e.target.value += '    ';
      }
    }
  }

  return (
    <FormWrapper>
      <CardForm onSubmit={handleSubmit}>
        <FormLabel>Cardholder label</FormLabel>
        <FormInput
          type="text"
          placeholder="e.g Jane Appleseed"
          required
          value={inputHolder}
          onChange={(e) => setInputHolder(e.target.value)}
        />
        <FormLabel>Card Number</FormLabel>
        <FormInput
          type="text"
          placeholder="e.g 1234 5678 9100 0000"
          maxLength={28}
          pattern="\d[28-28]{4}/"
          required
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          onKeyDown={(e) => createSpace(e)}
        />
        <FlexItem>
          <div>
            <FormLabel>Exp. date (mm/yy)</FormLabel>
            <FlexItem>
              <FormInput
                type="text"
                placeholder="mm"
                maxLength={2}
                required
                value={inputMonth}
                onChange={(e) => setInputMonth(e.target.value)}
              />
              <FormInput
                type="text"
                placeholder="yy"
                maxLength={2}
                required
                value={inputYear}
                onChange={(e) => setInputYear(e.target.value)}
              />
            </FlexItem>
          </div>
          <div>
            <FormLabel>CVC</FormLabel>
            <FormInput
              type="text"
              placeholder="e.g 133"
              maxLength={3}
              required
              value={inputCVC}
              onChange={(e) => setInputCVC(e.target.value)}
            />
          </div>
        </FlexItem>
        <ConfirmButton type="submit">confirm</ConfirmButton>
      </CardForm>
    </FormWrapper>
  );
};

export default Form;
