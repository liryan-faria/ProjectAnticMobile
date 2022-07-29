import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 1805px;
    padding: 48px 32px 48px 32px;
    background: #F3EEE8;
    border: none;

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 311px;
        height: 25px;
        margin-bottom: 40px;
    }


    .blog {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 20px;
        margin-bottom: 40px;
        width: 311px;
        height: 367px;
        border: none;
    }

    .titleBlog {
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: -0.2px;
        color: #534B42;
    }

    .imageBlog {
        width: 298.2px;
        height: 160px;
        background: linear-gradient(135deg, rgba(245, 245, 245, 0.01), 
            rgba(204, 240, 240, 0)), url("/images/blog.png");
        background-repeat: no-repeat;  

    }

    .paragraph {
        width: 290px;
        height: 100px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: rgba(0, 0, 0, 0.45);
    }

    .legals {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        width: 311px;
        height: 116px;
    }

    .links {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        width: 311px;
        height: 25px;
    }

    .linksLegals {
        width: 120px;
        height: 25px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: rgba(0, 0, 0, 0.45);

    }

    .language {
        width: 74px;
        height: 25px;
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        margin-top: 9px;
        margin-bottom: 32px;
        color: rgba(0, 0, 0, 0.45);

    }

    .agence {
        font-family: 'Varta', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        color: rgba(112, 100, 88, 0.9);
    }

`