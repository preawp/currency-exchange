// Sean's component
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const NavBarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: darkseagreen;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 5vh;
    color: #133601;
    padding-left: 10%;
`;

const Button = styled.button`
    color: #133601;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    padding: 20px;
    line-height: 2;
    border-radius: 5px;
    font-weight: bold;
    border: 4px solid;
    font-size: inherit;
    cursor: pointer;
    margin: 10px 5%;
`;

export default function NavBar() {
    let navigate = useNavigate();

    return (
        <NavBarWrapper>
            <Title>Currency Exchange</Title>
            <Button onClick={() => navigate('/')}>Homepage</Button>
            <Button onClick={() => navigate('/calculator')}>Calculator</Button>
            <Button onClick={() => navigate('/about-us')}>About Us</Button>
        </NavBarWrapper>
    );
}