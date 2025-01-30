import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;

    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.background}; 
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary}; 
        border-radius: 10px;
        transition: background 0.3s ease;
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
   
    }

    body{
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }

`;
