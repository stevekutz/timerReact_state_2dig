import React from 'react';
import burger20 from '../assets/img/Hamburger_icon20.png';
// import burger2 from '../assets/img/Hamburger_icon_2.jpg';
// import burger3 from '../assets/img/Hamburger_icon_3.jpg';
// import burger4 from '../assets/img/Hamburger_icon_4.jpg';


import {
    MenuBarContainer,
    IconImageContainer,
    IconImage,

} from '../styled/menu_bar_style';


const MenuBar = (props) => {

    return (
        <MenuBarContainer>
            <IconImageContainer>
                <IconImage src = {burger20}/>
            </IconImageContainer>

        </MenuBarContainer>
    )


}

export default MenuBar;