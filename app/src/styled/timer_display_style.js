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

const DigitControlButton = styled.button`
    border: 1px solid red;
    background: lightblue;

`

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
    

};
