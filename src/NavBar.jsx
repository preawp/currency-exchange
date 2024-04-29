// Sean's component
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

// Style the NavBar as a whole
const NavBarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background: #354121;
`;

// Style the title
const Title = styled.h2`
    text-align: center;
    font-size: 5vh;
    font-weight: bold;
    color: #ffffff;
    padding-left: 10%;
`;

// Style the buttons to click
const Button = styled.button`
    font-family: 'PT Serif', sans-serif;
    color: #354121;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    padding: 5px 15px;
    line-height: 1.5;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    margin: 2%;
    transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    &:active {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        transform: translateY(1px);
    }
`;


// NavBar function
export default function NavBar() {
    let navigate = useNavigate();

    return (
        <NavBarWrapper>
            <Title>CURRENCY EXCHANGE</Title>
            <Button onClick={() => navigate('/')}>Homepage</Button>
            <Button onClick={() => navigate('/calculator')}>Calculator</Button>
            <Button onClick={() => navigate('/about-us')}>About Us</Button>
        </NavBarWrapper>
    );
}
