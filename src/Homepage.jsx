import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";


const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between; /* Align items with space between */
    align-items: flex-start; /* Align items to the start (top) */
`;

const CurrencyContainer = styled.div`
    display: flex;
    flex-direction: column; /* Stack items vertically */
`;

const CurrencyOption = styled.div`
    margin-bottom: 20px; /* Add margin between each currency option */
    display: flex;
    flex-direction: column; /* Stack text underneath image */
    align-items: center; /* Align items at the center */
`;

const CurrencyImage = styled.img`
    width: 150px;
    height: 150px;
    border: 3px solid transparent; /* Add transparent border */
    transition: border-color 0.3s ease; /* Smooth transition for border color */

    &:hover {
        border-color: #74c7a3; /* Change border color on hover */
    }

`;

const CurrencyText = styled.span`
    margin-top: 10px;
    color: #1a2d27;
`;


const WelcomeMessage = styled.h1`
    margin-bottom: 20px;
    color: darkolivegreen;
    align-content: center;
`;

const GeneralImage = styled.img`
  max-width: 75%;
  height: 550px;
`;

const HomePage = () => {
    let navigate = useNavigate();

    return (
        <Container>
            <div>
                <WelcomeMessage>Convert one currency to another using live exchange rates!</WelcomeMessage>
                <Content>
                    <GeneralImage src="/assets/currencies.jpeg" alt="Welcome Image" />
                    <CurrencyContainer>
                        <CurrencyOption>
                            <button onClick={() => navigate('/calculator')}>
                                <CurrencyImage src="/assets/usd.jpeg" alt="USD" />
                            </button>
                            <CurrencyText>Convert USD</CurrencyText>
                        </CurrencyOption>
                        <CurrencyOption>
                            <button onClick={() => navigate('/calculator')}>
                                <CurrencyImage src="/assets/IMG_1114.JPG" alt="EUR" />
                            </button>
                            <CurrencyText>Convert EUR</CurrencyText>
                        </CurrencyOption>
                        <CurrencyOption>
                            <button onClick={() => navigate('/calculator')}>
                                <CurrencyImage src="/assets/yuan.jpeg" alt="GBP"/>
                            </button>
                            <CurrencyText>Convert CNY</CurrencyText>
                        </CurrencyOption>
                    </CurrencyContainer>
                </Content>
            </div>
        </Container>
    );
};

export default HomePage;
