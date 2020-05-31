
import { createGlobalStyle } from 'styled-components';

export const DynamicStyles = createGlobalStyle`
    body {
    margin: 0 !important;
    display: flex;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 6px;

    .card-title {
        color: ${({ theme }) => theme.TextColour};
    }
    
    .blue {
        background-color: ${({ theme }) => theme.BaseWindColor};
        color: ${({ theme }) => theme.BaseWindColorText};
        box-shadow: 5px 5px 0px 1px rgba(0,151,230,1);
    }

    .orange {
        background-color: ${({ theme }) => theme.BaseWindColor};
        color: ${({ theme }) => theme.BaseWindColorText};
        box-shadow: 5px 5px 0px 1px #E1B12C;
    }

    .form-card-body-left h3 {
        color: ${({ theme }) => theme.BaseWindColorText};
    }

    .form-card-body-left span {
        color: ${({ theme }) => theme.BaseWindColorText};
    }

    .wind-arrow-svg {
        fill: ${({ theme }) => theme.BaseWindColorArrow};
    }

`;