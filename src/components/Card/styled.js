import styled from 'styled-components';

export const Aside = styled.aside`
  position: relative;
  background: url('./bg-main-mobile.png');
  width: 100%;
  height: 240px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  color: hsl(0, 0%, 100%);
  text-transform: uppercase;

  @media (min-width: 1440px) {
    background: url('./bg-main-desktop.png');
    height: 100%;
    flex: 1;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const FrontCard = styled.img`
  width: 300px;
  position: absolute;
  bottom: -3rem;
  left: 1rem;
  z-index: 3;
  @media (min-width: 1440px) {
    width: 400px;
    bottom: 0;
    top: 8rem;
    left: 12rem;
  }
`;

export const BackCard = styled.img`
  width: 300px;
  position: absolute;
  bottom: 2.9rem;
  right: 1rem;
  @media (min-width: 1440px) {
    width: 400px;
    bottom: 0;
    top: 25rem;
    left: 16rem;
  }
`;

export const CardLogoImg = styled.img`
  position: absolute;
  transform: scale(0.7);
  top: 8.5rem;
  left: 1.5rem;
  z-index: 10;
  @media (min-width: 1440px) {
    top: 9.5rem;
    left: 13.5rem;
    transform: scale(0.8);
  }
`;

export const CardNumberSpace = styled.h2`
  position: absolute;
  top: 13rem;
  left: 2.5rem;
  z-index: 10;
  font-size: inherit;
  font-weight: inherit;
  @media (min-width: 1440px) {
    top: 16rem;
    left: 14rem;
    font-size: 24px;
  }
`;

export const CardHolderNameSpace = styled.h3`
  position: absolute;
  top: 16rem;
  left: 2.5rem;
  z-index: 10;
  font-size: 10px;
  font-weight: inherit;
  letter-spacing: 1.5px;
  @media (min-width: 1440px) {
    top: 19rem;
    left: 14rem;
    font-size: 14px;
  }
`;

export const ExpDateSpace = styled.h3`
  position: absolute;
  top: 16rem;
  left: 16rem;
  z-index: 10;
  font-size: 10px;
  font-weight: inherit;
  letter-spacing: 1.5px;
  @media (min-width: 1440px) {
    top: 19rem;
    left: 31.5rem;
    font-size: 14px;
  }
`;

export const CVCSpace = styled.h3`
  position: absolute;
  top: 6.5rem;
  right: 3.5rem;
  z-index: 10;
  font-size: 10px;
  font-weight: inherit;
  letter-spacing: 1.5px;
  @media (min-width: 1440px) {
    top: 31rem;
    left: 35.5rem;
    font-size: 14px;
  }
`;
