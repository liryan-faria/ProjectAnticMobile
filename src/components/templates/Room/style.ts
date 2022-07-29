import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 375px;
    height: 471.5px;
    padding: 48px 32px 48px 32px;
    background: #F3EEE8;

    .boxOne {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 311px;
        height: 110px;
    }

    .titlePage {
        width: 310px;
        height: 40px;
        font-family: 'Merriweather', serif;
        font-style: normal;
        font-weight: 300;
        font-size: 35px;
        line-height: 40px;
        letter-spacing: -0.3px;
        color: #534B42;
    }

    .paragraph {
        width: 310px;
        height: 50px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        margin-top: 20px;
        color: rgba(112, 100, 88, 0.9);
    }

    .boxTwo {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 311px;
        height: 232.5px;
        margin-top: 32px;
    }

    .boxTitle {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 311px;
        height: 232px;
    }

    .title {
        text-align: center;
        font-family: 'Merriweather', serif;
        font-style: normal;
        font-weight: 300;
        font-size: 35px;
        line-height: 40px;
        letter-spacing: -0.3px;
        color: #A06056;
    }

    .image {
        width: 155.5px;
        height: 232.5px;
        background: linear-gradient(135deg, rgba(245, 245, 245, 0.1), 
            rgba(204, 240, 240, 0)), url("/images/room.png");
        border-radius: 1px;
    }

    .label {
        width: 135.44px;
        height: 25px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        margin-left: 20.6px;
        color: rgba(0, 0, 0, 0.45);
    }

`