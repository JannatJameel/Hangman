import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #BDD6E5;
  }
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Wrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const Letters = styled.span`
    font-size: 30px;
`;

export const Images = styled.img`
    height: 25em;
`;

export const Hints = styled.button`
    width: 10em;
`;

export const PopupWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    align-items: center;
    justify-content: center;
`;

export const Popup = styled.div`
    background: white;
    border-radius: 5px;
    box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
`;
