import { createGlobalStyle } from 'styled-components';

import Gilroy from './gilroy.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${Gilroy}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;