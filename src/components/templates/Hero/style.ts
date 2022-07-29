import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 375px;
    height: 667px;

    background: linear-gradient(0deg, rgba(112, 100, 88, 0.2), 
        rgba(112, 100, 88, 0.2)), url("/images/background.png");
    background-repeat: no-repeat;

    .boxHero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 325px;
        height: 325px;
        margin-top: 165px;

    }

    .label {
        width: 325px;
        height: 20px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 1px;
        text-align: center;
        color: #FFFFFF;

    }

    .title {
        width: 325px;
        height: 120px;
        font-family: 'Merriweather', serif;
        font-style: normal;
        font-weight: 300;
        line-height: 40px;
        letter-spacing: -0.3px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 24px;
        margin-bottom: 24px;
        padding-left: 30px;
        align-self: stretch;

    }

    .paragraph {
        width: 325px;
        height: 50px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        padding-left: 25px;
        margin-bottom: 24px;
        text-align: center;
        color: #F7F8F9;

    }

`