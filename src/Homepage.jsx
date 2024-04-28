//Teresa's component
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
    justify-content: space-between;
    align-items: flex-start;
`;

const CurrencyContainer = styled.div`
    display: flex;
    flex-direction: column; //for currency images to be stacked together in a column on the right side of the screen
`;

const CurrencyOption = styled.div`
    margin-bottom: 20px; //spacing between currency images
    display: flex;
    flex-direction: column; 
    align-items: center;
`;

const CurrencyImage = styled.img`
    width: 150px;
    height: 150px;
    border: 3px solid transparent;
    transition: border-color 0.3s ease; 

    &:hover {
        border-color:  #354121; 
    }

`;

const CurrencyText = styled.span`
    margin-top: 10px;
    color: #1a2d27;
`;


const WelcomeMessage = styled.h1`
    margin-top: 50px;
    font-size: 30px;
    margin-bottom: 20px;
    color: #354121;
    align-content: center;
`;

const GeneralImage = styled.img`
    max-width: 75%;
    height: 75%;
    border: 10px solid #f1f1f1;
    box-shadow: 0 0 0 1px #747474;
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
