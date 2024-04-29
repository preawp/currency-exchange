//Teresa's component
import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

//styling all the content on the homepage to be centered
const Container = styled.div`
    display: flex;
    justify-content: center;
`;

//sufficient space in between image and text
const Content = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

//specific styling for 3 currency images on the side
const CurrencyContainer = styled.div`
    display: flex;
    flex-direction: column; //for currency images to be stacked together in a column on the right side of the screen
`;

//using flex to move currency images to right side
const CurrencyOption = styled.div`
    margin-bottom: 20px; //spacing between currency images
    display: flex;
    flex-direction: column; 
    align-items: center;
`;

//styling images with borders and sizing the 3 images' total height to be the same height as that of the big image on the left side
const CurrencyImage = styled.img`
    width: 150px;
    height: 150px;
    border: 3px solid transparent;
    transition: border-color 0.3s ease; 

    //green border appear when cursor hovers on the image
    &:hover {
        border-color:  #354121; 
    }

`;

//styling for text underneath images
const CurrencyText = styled.span`
    margin-top: 10px;
    color: #1a2d27;
`;

//styling for welcome message at the top of the homepage
const WelcomeMessage = styled.h1`
    margin-top: 50px;
    font-size: 30px;
    margin-bottom: 20px;
    color: #354121;
    align-content: center;
`;

//styling for bigger image on the left side
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
                    {/*When each image is clicked, you are brought to the calculator page of the website*/}
                    <CurrencyContainer>
                        <CurrencyOption>
                            {/*Sean added Nav button*/}
                            <button onClick={() => navigate('/calculator')}>
                                <CurrencyImage src="/assets/usd.jpeg" alt="USD" />
                            </button>
                            <CurrencyText>Convert USD</CurrencyText>
                        </CurrencyOption>
                        <CurrencyOption>
                            {/*Sean added Nav button*/}
                            <button onClick={() => navigate('/calculator')}>
                                <CurrencyImage src="/assets/IMG_1114.JPG" alt="EUR" />
                            </button>
                            <CurrencyText>Convert EUR</CurrencyText>
                        </CurrencyOption>
                        <CurrencyOption>
                            {/*Sean added Nav button*/}
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
