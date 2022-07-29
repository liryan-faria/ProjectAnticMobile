import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 375px;
    height: 884px;
    padding: 48px 32px 48px 32px;
    background: #F3EEE8;


    .title {
        width: 311px;
        height: 120px;
        font-family: 'Merriweather', serif;
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 40px;
        letter-spacing: -0.3px;
        margin-bottom: 32px;
        color: #534B42;
    }

    .services {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        width: 311px;
        height: 570px;
        margin-top: 41px;
    }

    .titleAdvices {
        width: 311px;
        height: 30px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: -0.2px;
        color: #A06056;
        margin-bottom: 5px;
    }

    .titleServices {
        width: 311px;
        height: 30px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: -0.2px;
        color: #A06056;
        
    }

    .text {
        width: 311px;
        height: 100px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: rgba(112, 100, 88, 0.9);
    }

    .boxServices {
        margin-bottom: 40px;
    }

`