// Teresa's component
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar.jsx';
import API from './API.jsx';



const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Content = styled.div`
  padding: 20px;
`;

const CurrencyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CurrencyOption = styled.div`
  margin: 10px;
`;

const CurrencyImage = styled.img`
  width: 100px;
  height: 100px;
`;

const LinksContainer = styled.div`
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const WelcomeMessage = styled.h1`
  margin-bottom: 20px;
`;

const GeneralImage = styled.img`
  max-width: 50%;
  height: auto;
  margin-top: 20px;
`;

const HomePage = () => {
    return (
        <Container>
            <div>
                <WelcomeMessage>Welcome to Currency Converter</WelcomeMessage>
                <Content>
                    <GeneralImage src="/assets/currencies.jpeg" alt="Welcome Image" />
                    <CurrencyContainer>
                        <CurrencyOption>
                            <CurrencyImage src="/assets/usd.jpeg" alt="USD" />
                            <Link to="/usd">Convert USD</Link>
                        </CurrencyOption>
                        <CurrencyOption>
                            <CurrencyImage src="/assets/eur.jepg" alt="EUR" />
                            <Link to="/eur">Convert EUR</Link>
                        </CurrencyOption>
                        <CurrencyOption>
                            <CurrencyImage src="/images/yen.jpeg" alt="GBP" />
                            <Link to="/gbp">Convert JPY</Link>
                        </CurrencyOption>
                    </CurrencyContainer>
                </Content>
            </div>
        </Container>
    );
};

export default HomePage;

