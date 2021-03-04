import React from 'react';
//import './timerdisplay.css'

import {
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

} from '../styled/timer_display_style';


const TimerDisplay = (props) => {

    return (
            <div>
                <DisplayContainerDiv>
                    <DisplayTimeContainerDiv>
                        <DisplayIncDecContainer>
                            <IncDecButton onClick = {props.incMin_handler}> + </IncDecButton>
                            <DisplayDigitPairContainer>
                                <DisplayDigitText> {props.min_tens} </DisplayDigitText>
                                <DisplayDigitText> {props.min_ones} </DisplayDigitText>                        
                            </DisplayDigitPairContainer>
                            <IncDecButton onClick = {props.decMin_handler}> - </IncDecButton>
                        </DisplayIncDecContainer>

                        <DisplayColonDiv> {props.colon} </DisplayColonDiv>

                        <DisplayIncDecContainer>
                            <IncDecButton onClick = {props.incSec_handler}> + </IncDecButton>
                            <DisplayDigitPairContainer>
                                <DisplayDigitText> {props.sec_tens} </DisplayDigitText>
                                <DisplayDigitText> {props.sec_ones} </DisplayDigitText>
                            </DisplayDigitPairContainer>
                            <IncDecButton onClick = {props.decSec_handler}> - </IncDecButton>
                        </DisplayIncDecContainer>
                    
                    
                    </DisplayTimeContainerDiv>
                
                    <DisplayDigitControls>
                        <DigitControlButtonStartStop 
                            onClick = {props.toggleTimer_handler}
                            timerActive = {props.timerActive}    
                        > {props.startStopLabel} </DigitControlButtonStartStop>
                        <DigitControlButton onClick = {props.reset_handler}> Reset </DigitControlButton>
                    </DisplayDigitControls>

                    

                    
                
                </DisplayContainerDiv>
            
            
            
            </div>

    )


}


export default TimerDisplay;