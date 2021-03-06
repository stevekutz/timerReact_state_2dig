import React, {Component} from 'react';
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


class TimerDisplay extends Component {

    render() {
    
    
    
        return (
                <div>
                    
                    <DisplayContainerDiv>
                        <DisplayTimeContainerDiv>
                            <DisplayIncDecContainer>
                                <IncDecButton onClick = {this.props.incMin_handler}> + </IncDecButton>
                                <DisplayDigitPairContainer>
                                    <DisplayDigitText> {this.props.min_tens} </DisplayDigitText>
                                    <DisplayDigitText> {this.props.min_ones} </DisplayDigitText>                        
                                </DisplayDigitPairContainer>
                                <IncDecButton onClick = {this.props.decMin_handler}> - </IncDecButton>
                            </DisplayIncDecContainer>

                            <DisplayColonDiv> {this.props.colon} </DisplayColonDiv>

                            <DisplayIncDecContainer>
                                <IncDecButton onClick = {this.props.incSec_handler}> + </IncDecButton>
                                <DisplayDigitPairContainer>
                                    <DisplayDigitText> {this.props.sec_tens} </DisplayDigitText>
                                    <DisplayDigitText> {this.props.sec_ones} </DisplayDigitText>
                                </DisplayDigitPairContainer>
                                <IncDecButton onClick = {this.props.decSec_handler}> - </IncDecButton>
                            </DisplayIncDecContainer>
                        
                        
                        </DisplayTimeContainerDiv>
                    
                        <DisplayDigitControls>
                            <DigitControlButtonStartStop 
                                onClick = {this.props.toggleTimer_handler}
                                timerActive = {this.props.timerActive}    
                            > {this.props.startStopLabel} </DigitControlButtonStartStop>
                            <DigitControlButton onClick = {this.props.reset_handler}> Reset </DigitControlButton>
                        </DisplayDigitControls>

                        

                        
                    
                    </DisplayContainerDiv>
                
                
                
                </div>



        )

    }
}


export default TimerDisplay;