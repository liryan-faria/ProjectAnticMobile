import styled from "styled-components";

export const Wrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 12px 15px;
    margin-top: 32px;
    margin-bottom: 16px;
    width: 311px;
    height: 49px;
    background: rgba(243, 238, 232, 0.3);
    border-radius: 1px;

    .input {
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: rgba(0, 0, 0, 0.45);
        background: rgba(243, 238, 232, 0.3);
        border: none;
    }

    .input:focus {
        outline: none;
        border: none;
    }
`