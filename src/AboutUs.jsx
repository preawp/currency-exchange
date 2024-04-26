//Preaw's component
import React from "react";
import styled from "styled-components";
import preaw from "../assets/preaw.jpg";
import teresa from "../assets/teresa.png";
import sean from "../assets/sean.png"
import simon from "../assets/simon.png";


const StyledAboutUs = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const StyledHeader = styled.h1`
   margin-bottom: 1%`;
const StyledName = styled.p`
   font-weight: bold;
   margin-bottom: 5px;
`
const StyledDescription = styled.p`
   margin-top: 0;
   font-weight: lighter;
   margin-bottom: 3%;
`
const StyledImage = styled.img`
    width: 200px;
    height: auto;
    border: 5px solid #addb9b;
    border-radius: 10px;
    animation: borderAnimation 3s infinite;
    transition: transform 0.3s ease-in-out;  // Smooth transition for transform changes

    @keyframes borderAnimation {
        0% {
            border-color: #addb9b;
        }
        25% {
            border-color: #759669;
        }
        50% {
            border-color: #3e624d;
        }
        75% {
            border-color: #72986d;
        }
        100% {
            border-color: #9ec49b;
        }
    }

    &:hover {
        transform: rotate(3deg); 
    }
`;







export default function AboutUs(){
    return (
        <>
            <StyledAboutUs>
                <StyledHeader>About Us</StyledHeader>


                <StyledDescription>Hi! We are a team of four developing this website for our CS391 final project</StyledDescription>


                <StyledImage src={preaw} alt="Preaw" />
                <StyledName>Pimpisut(Preaw) Puttipongkawin</StyledName>
                <StyledDescription>email: preawp@bu.edu</StyledDescription>


                <StyledImage src={sean} alt = "Sean"/>
                <StyledName>Sean Gilday</StyledName>
                <StyledDescription>email: spgilday19@gmail.com</StyledDescription>

                <StyledImage src={simon} alt = "Simon"/>
                <StyledName>Simon Pan</StyledName>
                <StyledDescription>email: simonpan@bu.edu</StyledDescription>

                <StyledImage src={teresa} alt = "Teresa"/>
                <StyledName>Teresa Joseph</StyledName>
                <StyledDescription>email: teresaj@bu.edu</StyledDescription>

            </StyledAboutUs>
        </>
    );
}
