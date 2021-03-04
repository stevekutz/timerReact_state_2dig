import styled, {css} from 'styled-components';

const DisplayContainerDiv = styled.div`
    
    border: 3px solid deeppink;
    width: 40%;
    color: red;
    padding:
    display: flex;
    margin: 4px auto;



`;

const DisplayTimeContainerDiv = styled.div`
    border: 3px solid purple;
    
    width: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 10px;
    margin: 4px auto;


`

const DisplayDigitPairContainer = styled.div`
    border: 1px solid green;
    width: 28px;
    display: flex;
`

const DisplayColonDiv = styled.div`
    border: 1px solid seagreen; 

    width: 5px;
`

const DisplayIncDecContainer = styled.div`
    border: 1px solid pink;

    width: 30px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`

const DisplayDigitText = styled.div`
    border: 1px solid yellow;
    width: 12px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: lightgray;
    text-align: center;

`
const IncDecButton = styled.button`
    border: 1px solid dodgerblue;
    
    background-color: lightgray;
    width: 20px;
    border-radius: 5px;
    margin: 4px;
    outline-style: none;


    :active {
        border: 1px solid orange;
        color: red;
    }
`


const DisplayDigitControls = styled.div`
    border: 1px solid blue;
    
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    margin: 4px auto;

`

// const DigitControlButton = styled.button`
//     border: 2px solid dodgerblue;
    

//     ${props.timerActive ? "color: seagreen;" : "color: darkred;"}

const DigitControlButton = styled.button`

    border: 2px solid purple;
    // border: 4px solid seagreen;
    color: purple;





    width: 30%;
    padding: 2px;
    font-size: 16px;
    font-weight: bolder;
    border-radius: 10px;
    background: lightblue;
    outline-style: none;

    :active {
        border: 2px solid orange;
    }

`
const DigitControlButtonStartStop = styled(DigitControlButton)`
    color: ${props => props.timerActive ? 'palevioletred' : 'seagreen'};
    background: ${props => props.timerActive ? 'pink' : '#C7FFEE'};
    border: ${props => props.timerActive ? '4px solid palevioletred' : '4px solid seagreen'}

`

// border-color: ${props => props.timerActive ? '1px solid palevioletred' : '1px solid seagreen'}
export {
    DisplayContainerDiv,
    DisplayTimeContainerDiv,
    DisplayColonDiv,
    DisplayDigitText,
    DisplayDigitPairContainer,
    DisplayIncDecContainer,
    IncDecButton,
    DisplayDigitControls,
    DigitControlButton,
    DigitControlButtonStartStop,
    

};
