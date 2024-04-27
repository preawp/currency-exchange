import React from 'react';
import styled from 'styled-components';
import dollarImage from './images/dollar.png';
import euroImage from './images/euro.png';

const Navbar = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Logo = styled.h1`
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

const HomePage = () => {
    return (
        <div>
            <Navbar>
                <Logo>Currency Converter</Logo>
            </Navbar>
            <Container>
                <Text>Welcome to our Currency Converter</Text>
                <ImageContainer>
                    <Image src={dollarImage} alt="Dollar" />
                    <Image src={euroImage} alt="Euro" />
                </ImageContainer>
                <Text>Convert your currencies with ease!</Text>
            </Container>
        </div>
    );
};

export default HomePage;
