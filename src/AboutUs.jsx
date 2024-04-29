// Pimpisut's component
// Note: Apart from this AboutUs component, I also contributed to refining the overall styling of the website.

import React from "react";
import styled from "styled-components";

// Import images of team members for display on the About Us page
import preaw from "../assets/preaw.jpg";
import teresa from "../assets/teresa.png";
import sean from "../assets/sean.png";
import simon from "../assets/simon.png";

// Main styled container for the About Us page, arranging content in a vertical column and centered
const StyledAboutUs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Styled header for the page, setting text color and bottom margin
const StyledHeader = styled.h1`
    color: #354121; // Dark green color for the text
    margin-bottom: 1%; // Space below the header
`;

// Styled paragraph for displaying names, with bold font weight and a small bottom margin
const StyledName = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`;

// Styled paragraph for additional description or email information, with lighter font weight and increased bottom margin
const StyledDescription = styled.p`
    margin-top: 0;
    font-weight: lighter;
    margin-bottom: 3%;
`;

// Styled image component with borders, border-radius, and animations for interaction
const StyledImage = styled.img`
    width: 200px; // Fixed width for uniformity
    height: auto; // Auto height to maintain aspect ratio
    border: 5px solid #354121; // Thick green border
    border-radius: 10px; // Rounded corners
    animation: borderAnimation 3s infinite; // Infinite border animation
    transition: transform 0.3s ease-in-out; // Smooth transform transition for hover effect

    &:hover {
        transform: rotate(3deg); // Slight rotation on hover
    }
`;

// Functional component for rendering the About Us page
export default function AboutUs(){
    return (
        <>
            <StyledAboutUs>
                <StyledHeader>About Us</StyledHeader>
                <StyledDescription>Hi! We are a team of four developing this website for our CS391 final project</StyledDescription>

                {/*Components for each team member, including an image, name, and email*/}

                <StyledImage src={preaw} alt="Preaw" />
                <StyledName>Pimpisut (Preaw) Puttipongkawin</StyledName>
                <StyledDescription>email: preawp@bu.edu</StyledDescription>

                <StyledImage src={sean} alt="Sean"/>
                <StyledName>Sean Gilday</StyledName>
                <StyledDescription>email: spgilday19@gmail.com</StyledDescription>

                <StyledImage src={simon} alt="Simon"/>
                <StyledName>Simon Pan</StyledName>
                <StyledDescription>email: simonpan@bu.edu</StyledDescription>

                <StyledImage src={teresa} alt="Teresa"/>
                <StyledName>Teresa Joseph</StyledName>
                <StyledDescription>email: teresaj@bu.edu</StyledDescription>
            </StyledAboutUs>
        </>
    );
}
