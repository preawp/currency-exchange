import DataFetcher from "./DataFecher.jsx"
import {useEffect, useState } from "react";
import {useCallback} from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    color: #354121;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledInput = styled.input`
    width: 20%;
    padding: 8px;
    margin: 8px;
    border: 2px solid #354121;
    border-radius: 4px;
`;

const StyledButton = styled.button`
    font-family: 'PT Serif', sans-serif;
    color: #ffffff;
    background: #354121;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin: 8px;
    transition: transform 0.1s ease-in-out; 

    &:hover {
    }

    &:active {
        transform: translateY(1px);
    }
`;


export default function Calculator() {
    const [currency, setCurrency] = useState("");//This is for setting currency name here, currency= currency code
    const [currencyToFetch, setCurrencyToFetch] = useState(""); // This state will be used to trigger the fetch
    const [currencyRate, setRate] = useState({});// This is the data of all other currencies's worth comparing the one you have



    
    const [CalcFirstCurr, setFirst]= useState("");// very similar logic to above for the second functionality. except there are two currency to store and extra calculation to be done and store
    const [exchangeCurrencyToFetch,SetExCurrencyToFetch]= useState("")
    const [CalcSecondCurr, setSecond]= useState("");
    const [amount, SetAmount]=useState(0);

    const [exchangedAmount, SetExchangedAmount]=useState(0);
    const [exchangeRates,setExchangeRates]=useState("")


    const handleDataFetched = useCallback((data) => {
        setRate(data);
        //DataFetcher calling this so we got data stored from api. also cleaning the setCurrencyToFetch hook
        console.log("data printing yoyo", data);
        setCurrencyToFetch("");
    }, []);

    const ExchangeHandleDataFetched = useCallback((data) => {
        setExchangeRates(data);
        SetExCurrencyToFetch("");
    }, []);

    const handleButtonClick = () => {
        if (currency.trim() !== "") {
            //check if there is an actual input and then get the currency code
            setCurrencyToFetch(currency);
        }
    };
    const eXHandleButtonClick = () => {
        if (CalcFirstCurr.trim() !== "") {
            SetExCurrencyToFetch(CalcFirstCurr);
            // similar process to previous functinality
        }
    };


    useEffect(() => {
        // doing the calculation for second functionality here. when data changes we calcualte ,after conditonal checking the fields if they valid ,we call calculateResult()
        // Ensure all required data is present and valid before attempting calculation
        if (CalcFirstCurr && CalcSecondCurr && amount > 0 && exchangeRates && exchangeRates.conversion_rates) {
            if (CalcFirstCurr in exchangeRates.conversion_rates && CalcSecondCurr in exchangeRates.conversion_rates) {
                calculateResult();
            } else {
                console.log("One or both of the currency codes are not found.");
                SetExchangedAmount(0); // Consider providing user feedback here
            }
        }
    },   [CalcFirstCurr, CalcSecondCurr, amount, exchangeRates]);

    const calculateResult = () => {
        // doing currency math here, get the amount of currency you could exchange for in ExchangedAmount
        if (CalcFirstCurr && CalcSecondCurr && amount > 0 ) {
            // Check that both currencies exist in the conversion rates
            if (CalcFirstCurr in exchangeRates.conversion_rates && CalcSecondCurr in exchangeRates.conversion_rates) {
                const rate = exchangeRates.conversion_rates[CalcSecondCurr];
                SetExchangedAmount(amount * rate);
            } else {
                console.log("One or both of the currency codes are not found.");
                SetExchangedAmount(0); // Reset to 0 or handle the error as needed
            }
        }
    };


    return (
        <>
            <StyledContainer>
            <h1>Tell me the first currency you want to check</h1>
            <p>Enter a currency code below to get data of exchange rates:</p>
            <StyledInput
                type="text"
                value={currency}
                placeholder="Currency Code (e.g., USD)"
                onChange={(e) => setCurrency(e.target.value.toUpperCase())}/>
            <StyledButton onClick={handleButtonClick}>Check All Rate for your currency(how much is one unit of your currency
                worth in the form of another currency )
            </StyledButton>


            {currencyToFetch && <DataFetcher currency={currencyToFetch} onDataFetched={handleDataFetched}/>}
                {/*check data exists and then call DataFetcher, give a function handleDataFetched and DataFetcher will call back., for the purpose of storing data from api*/}
            <div>
                {/*just printing the result of data here*/}
                {currencyRate.conversion_rates ? (
                    Object.entries(currencyRate.conversion_rates).map(([code, rate]) => (
                        <p key={code}>{code}: {rate}</p>
                    ))
                ) : (
                    <p>No rate data available for now for lists of countries .</p>
                )}
            </div>
                {/*--second functionality*/}
            <h2>Or Tell me the currency you currently have, the one you want to exchange for, and the amount you have
                for your current currency</h2>
            <StyledInput type="text" value={CalcFirstCurr} placeholder="First Currency name(the one you have)"
                   onChange={(e) => setFirst(e.target.value.toUpperCase())}></StyledInput>
            <StyledInput type="text" value={CalcSecondCurr}
                   placeholder="Second Currency name(the one you want to exchange for)"
                   onChange={(e) => setSecond(e.target.value.toUpperCase())}></StyledInput>
            <StyledInput type="number" // Changed to type number for better input control
                   value={amount} // binds this input to amount state
                   placeholder="Amount"
                   onChange={(e) => SetAmount(e.target.value)}/>


            <StyledButton onClick={eXHandleButtonClick}> click for calculation

            </StyledButton>
                {/*-- similar process  as above, call the functions with data and they will get back result. and extra layer of calculation happens in the function*/}
            {exchangeCurrencyToFetch && (
                <DataFetcher currency={exchangeCurrencyToFetch} onDataFetched={ExchangeHandleDataFetched}/>
            )}

            <div>
                {exchangedAmount? (exchangedAmount) :(
                    <p>No calculation result</p>
                )}
            </div>
            </StyledContainer>

        </>


    );
}
