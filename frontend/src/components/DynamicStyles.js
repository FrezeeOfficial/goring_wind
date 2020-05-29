
import { createGlobalStyle } from 'styled-components';

export const DynamicStyles = createGlobalStyle`
    body {
    margin: 0 !important;
    display: flex;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.TextColour}

    border-radius: 6px;
}

`;