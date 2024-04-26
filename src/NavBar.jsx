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
`;

const Button = styled.button`
    color: #133601;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    padding: 10px;
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
            <Button onClick={() => navigate('/')}>Homepage</Button>
            <Title>Currency Exchange</Title>
            <Button onClick={() => navigate('/about-us')}>About Us</Button>
        </NavBarWrapper>
    );
}



