import React from 'react';
import {
  Aside,
  CardLogoImg,
  FrontCard,
  CardNumberSpace,
  CardHolderNameSpace,
  ExpDateSpace,
  BackCard,
  CVCSpace,
} from './styled';
import CardFrontPic from '/bg-card-front.png';
import CardBackPic from '/bg-card-back.png';
import CardLogo from '/card-logo.svg';

const Card = ({ ...cardInfo }) => {
  return (
    <Aside>
      <CardLogoImg src={CardLogo} />
      <FrontCard src={CardFrontPic}></FrontCard>
      {/* if cardNumber not defined show default value */}
      <CardNumberSpace>
        {!cardInfo.cardNumber ? '0000 0000 0000 0000' : cardInfo.cardNumber}
      </CardNumberSpace>
      <CardHolderNameSpace>
        {!cardInfo.cardHolder ? 'your name' : cardInfo.cardHolder}
      </CardHolderNameSpace>
      <ExpDateSpace>
        {!cardInfo.expMonth ? '00' : cardInfo.expMonth}/
        {!cardInfo.expYear ? '00' : cardInfo.expYear}
      </ExpDateSpace>
      <BackCard src={CardBackPic}></BackCard>
      <CVCSpace>{!cardInfo.CVC ? 'cvc' : cardInfo.CVC}</CVCSpace>
    </Aside>
  );
};

export default Card;
