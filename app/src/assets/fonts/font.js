import {createdGlobalStyle} from 'styled-components';

import DigitalDismay from './DigitalDismay.otf';

export default createdGlobalStyle`
    @font-face {
            font-family: 'DigitalDismay';
            src: local('DigitalDismay'), local('DigitalDismay'),
            url(${DigitalDismay});
            font-style: normal;
            font-weight: 400;
        
        
        }

`